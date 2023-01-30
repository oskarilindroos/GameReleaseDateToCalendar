import { BASE_API_URL, CLIENT_ID, ACCESS_TOKEN } from "@env";
import axios from "axios";

const gamesAPI = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Client-ID": CLIENT_ID,
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
});

// Internal function for formatting the response games data in to a more usable format
const formatGamesData = (data) => {
  const formatted = data.map((game) => ({
    id: game.id,
    name: game.name,
    summary: game.summary,
    coverId: game.cover ? game.cover.image_id : "nocover",
    firstReleaseDate: new Date(game.first_release_date * 1000)
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" "),
  }));
  //console.log(formatted);
  return formatted;
};

export const searchUpcomingGamesByName = async (searchPhrase: string) => {
  const nowTimeStamp = Math.floor(Date.now() / 1000); // Converting the current date to Unix timestamp

  const payload = `fields name, id, cover.image_id, first_release_date, summary;
    where name ~ *"${searchPhrase}"* &
    themes.slug != "erotic" &
    version_parent = null &
    first_release_date > ${nowTimeStamp};
    sort first_release_date asc;
    limit 200;
    `;

  try {
    const response = await gamesAPI.post("/games", payload);
    return formatGamesData(response.data);
  } catch (error) {
    throw error;
  }
};

export const getGamesNextMonth = async () => {
  const nowTimeStamp = Math.floor(Date.now() / 1000); // Converting the current date to Unix timestamp
  const monthFromNowTimeStamp = nowTimeStamp + 2592000; // 2592000 is approximately a month in seconds

  const payload = `fields name, id, cover.image_id, first_release_date, summary;
    where themes.slug != "erotic" & version_parent = null & (first_release_date > ${nowTimeStamp} & first_release_date < ${monthFromNowTimeStamp});
    sort first_release_date asc;
    limit 400;
  `;

  try {
    const response = await gamesAPI.post("/games", payload);
    return formatGamesData(response.data);
  } catch (error) {
    throw error;
  }
};
