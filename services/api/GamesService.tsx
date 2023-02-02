import { BASE_API_URL, CLIENT_ID, ACCESS_TOKEN } from "@env";
import { Game, APIresponse } from "../../types/games.d";
import axios from "axios";
import moment from "moment";

moment.locale("en");

const gamesAPI = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Client-ID": CLIENT_ID,
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
});

// Internal function for formatting the API response data in to a more usable format
const formatGamesData = (data: Array<APIresponse>): Array<Game> => {
  const formatted = data.map(
    ({ id, name, summary, cover, first_release_date, screenshots }) => ({
      id,
      name,
      summary,
      coverId: cover ? cover.image_id : "nocover",
      screenshots,
      releasingInString: moment.unix(first_release_date).fromNow(),
      firstReleaseDateString: moment.unix(first_release_date).format("ll"),
    })
  );

  return formatted;
};

export const searchUpcomingGamesByName = async (searchPhrase: string) => {
  const nowTimeStamp = Math.floor(Date.now() / 1000); // Converting the current date to Unix timestamp

  const payload = `fields name, id, cover.image_id, first_release_date, summary, screenshots;
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

  const payload = `fields name, id, cover.image_id, first_release_date, summary, screenshots;
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
