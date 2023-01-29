import { useEffect, useState } from "react";
import * as Styled from "../../styled/styles";
import { useTheme } from "styled-components/native";
import {
  searchUpcomingGamesByName,
  getGamesNextMonth,
} from "../../../services/api/GamesService";
import GameCard from "../../GameCard";
import { FlatList } from "react-native";

export default function HomeScreen({ route }) {
  const theme = useTheme();

  const [searchPhrase, setSearchPhrase] = useState("");
  const [gamesList, setGamesList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get the games releasing next month
  // This is run only once when the app first loads
  /*
  useEffect(() => {
    setLoading(true);
    getGamesNextMonth()
      .then((result) => {
        setGamesList(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  // Set the search phrase state if route.params changes
  // route.params changes when the user submits the search input field and navigates back to home screen
  useEffect(() => {
    setSearchPhrase(route.params);
  }, [route.params]);

  // When the search phrase is changed, call the games service for the search results
  useEffect(() => {
    // Prevents useffect from being ran on first render
    if (searchPhrase) {
      setGamesList([]);
      setLoading(true);
      searchUpcomingGamesByName(searchPhrase)
        .then((result) => {
          setGamesList(result);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchPhrase]);
  return (
    <Styled.Wrapper>
      <Styled.ContentContainer>
        <Styled.Title>
          {searchPhrase
            ? `Search results for '${searchPhrase}'`
            : "Games releasing next month"}
        </Styled.Title>
        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          numColumns={3}
          data={gamesList}
          renderItem={({ item }) => <GameCard game={item} />}
          keyExtractor={(item) => item.id}
        />
        {loading && (
          <Styled.LoadingIcon size={"large"} color={theme.colors.primary} />
        )}
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
}

// TODO: Move in to its own file, this is temporary to check that the API works
/*
  useEffect(() => {
    const checkCalendarPermission = async () => {
      try {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === "granted") {
          const allCalendars = await Calendar.getCalendarsAsync();

          // Filter all the owned calendars from the read only ones
          const ownedCalendars = allCalendars.filter(
            (calendar) => calendar.accessLevel === "owner"
          );

          console.log({ ownedCalendars });
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkCalendarPermission();
  }, []);
  */
/*
  {gamesList.map((item) => {
    return (
      <Paragraph>
        {item.name} : {item.release_dates[0].human}
        <Image
          source={{
            uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${item.cover.image_id}.png`,
          }}
        />
      </Paragraph>
    );
  })}*/
