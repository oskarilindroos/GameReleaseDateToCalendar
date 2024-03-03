import { IGDB_API_URL, CLIENT_ID, ACCESS_TOKEN, CLIENT_SECRET } from "@env";
import { Game, APIresponse } from "../types/games.d";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import moment from "moment";

moment.locale("en");

const screenshotBaseURL =
  "https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/";
const coverBaseURL = "https://images.igdb.com/igdb/image/upload/t_cover_big";

// Helper function for formatting the API response data in to a more usable format
const formatGamesData = (data: Array<APIresponse>): Array<Game> => {
  const formatted = data.map(
    ({
      id,
      name,
      summary,
      cover,
      first_release_date,
      screenshots,
      platforms,
    }) => ({
      id,
      name,
      summary,
      coverURL: cover
        ? `${coverBaseURL}/${cover.image_id}.png`
        : `${coverBaseURL}/nocover.png`,
      screenshotURLs: screenshots
        ? screenshots.map(({ image_id }) => ({
            img: `${screenshotBaseURL}${image_id}.jpg`,
          }))
        : null,
      platforms: platforms.flatMap(({ abbreviation }) =>
        !abbreviation ? ["Unknown"] : abbreviation
      ),
      releasingInString: moment.unix(first_release_date).fromNow(),
      firstReleaseDateString: moment.unix(first_release_date).format("ll"),
    })
  );
  return formatted;
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [accessTokenFetched, setAccessTokenFetched] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAccessToken = async () => {
    try {
      const response = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        null,
        {
          params: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "client_credentials",
          },
        }
      );

      setAccessToken(response.data.access_token);
      setAccessTokenFetched(true);
      console.log("Access token fetched");
    } catch (error) {
      console.log(error);
      setError("Error");
    }
  };

  // Fetch the access token on component mount
  useEffect(() => {
    console.log("Fetching access token");
    fetchAccessToken();
  }, []);

  const fetchUpcomingGamesByName = async (searchPhrase: string) => {
    const nowTimeStamp = Math.floor(Date.now() / 1000); // Converting the current date to Unix timestamp

    const payload = `fields name, id, cover.image_id, first_release_date, summary, screenshots.image_id, platforms.abbreviation;
    where name ~ *"${searchPhrase}"* &
    themes.slug != "erotic" &
    version_parent = null &
    first_release_date > ${nowTimeStamp};
    sort first_release_date asc;
    limit 200;
    `;

    try {
      setGames([]);
      setLoading(true);
      const response = await axios.post(`${IGDB_API_URL}/games`, payload, {
        headers: {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setGames(formatGamesData(response.data));
    } catch (error) {
      console.log(error);
      setError("Error fetching games. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchGamesReleasingNextMonth = async () => {
    const nowTimeStamp = Math.floor(Date.now() / 1000); // Converting the current date to Unix timestamp
    const monthFromNowTimeStamp = nowTimeStamp + 2592000; // 2592000 is approximately a month in seconds

    const payload = `fields name, id, cover.image_id, first_release_date, summary, screenshots.image_id, platforms.abbreviation;
    where themes.slug != "erotic" & version_parent = null & (first_release_date > ${nowTimeStamp} & first_release_date < ${monthFromNowTimeStamp});
    sort first_release_date asc;
    limit 400;
  `;

    try {
      setGames([]);
      setLoading(true);
      const response = await axios.post(`${IGDB_API_URL}/games`, payload, {
        headers: {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setGames(formatGamesData(response.data));
    } catch (error) {
      console.log(error);
      setError("Error fetching games. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    games,
    accessTokenFetched,
    fetchGamesReleasingNextMonth,
    fetchUpcomingGamesByName,
    loading,
    error,
  };
};

export default useGames;
