import { BASE_API_URL, CLIENT_ID, ACCESS_TOKEN } from "@env";
import axios from "axios";

axios.defaults.baseURL = BASE_API_URL;
const config = {
  headers: {
    "Client-ID": CLIENT_ID,
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
};

export const searchGamesByName = (gameName: string) => {
  const data = `fields name, release_dates.date, release_dates.platform, rating;
    where name ~ "${gameName}"*  &
    release_dates.platform = 6 &
    release_dates.date > 1674847104814 ;
    sort rating desc;
    limit 10;
    `;
  console.log("Making request");
  return axios
    .post("/games", data, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
