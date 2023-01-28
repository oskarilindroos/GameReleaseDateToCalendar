import { BASE_API_URL, CLIENT_ID, ACCESS_TOKEN } from "@env";
import axios from "axios";

axios.defaults.baseURL = BASE_API_URL;
const config = {
  headers: {
    "Client-ID": CLIENT_ID,
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
};

export const searchUpcomingGamesByName = (gameName: string) => {
  const data = `fields name, release_dates.human;
    where name ~ *"${gameName}"*  &
    version_parent = null &
    release_dates.platform = 6 &
    (release_dates.date > ${Math.floor(Date.now() / 1000)} |
    release_dates.human = "TBD");
    sort rating desc;
    limit 50;
    `;
  console.log("Making request");
  return axios
    .post("/games", data, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
