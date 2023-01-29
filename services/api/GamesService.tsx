import { BASE_API_URL, CLIENT_ID, ACCESS_TOKEN } from "@env";
import axios from "axios";

axios.defaults.baseURL = BASE_API_URL;
const config = {
  headers: {
    "Client-ID": CLIENT_ID,
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
};

// Internal function for formatting the response games data in to a more usable format
const formatGamesData = (data) => {
  const formatted = data.map((game) => ({
    id: game.id,
    name: game.name,
    coverId: game.cover ? game.cover.image_id : "nocover",
    releaseDates: game.release_dates,
    firstReleaseDate: game.first_release_date
      ? new Date(game.first_release_date * 1000)
          .toDateString()
          .split(" ")
          .slice(1)
          .join(" ")
      : null,
  }));
  //console.log(formatted);
  return formatted;
};

export const searchUpcomingGamesByName = (searchPhrase: string) => {
  const data = `fields name, release_dates.human, cover.image_id, first_release_date;
    where name ~ *"${searchPhrase}"* &
    version_parent = null &
    release_dates.platform = (6,167,169,130) &
    first_release_date > ${Math.floor(Date.now() / 1000)};
    sort first_release_date asc;
    limit 100;
    `;
  console.log("Making request");

  return axios
    .post("/games", data, config)
    .then((response) => formatGamesData(response.data))
    .catch((error) => {
      throw error;
    });
};

export const getGamesNextMonth = () => {
  const data = `fields name, release_dates.human, cover.image_id, first_release_date;
    where release_dates.platform = (6,167,169,130) & (first_release_date > 1674907890 & first_release_date < 1677576484);
    sort first_release_date asc;
    limit 100;
  `;

  console.log("Getting");

  return axios
    .post("/games", data, config)
    .then((response) => formatGamesData(response.data))
    .catch((error) => {
      throw error;
    });
};
