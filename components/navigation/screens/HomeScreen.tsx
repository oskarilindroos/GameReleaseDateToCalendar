import * as Calendar from "expo-calendar";
import { useEffect, useState } from "react";
import {
  Wrapper,
  Paragraph,
  Heading,
  StyledHeader,
  ContentContainer,
} from "../../styled/styled.components";
import { useTheme } from "styled-components/native";
import { searchGamesByName } from "../../../services/api/GamesService";

export default function HomeScreen({ route }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    setSearchPhrase(route.params);
  }, [route.params]);

  useEffect(() => {
    if (searchPhrase) {
      searchGamesByName(searchPhrase).then((result) =>
        setSearchResults(result)
      );
    }
  }, [searchPhrase]);
  return (
    <Wrapper>
      <ContentContainer>
        <Heading>
          {searchPhrase
            ? `Search results for ${searchPhrase}...`
            : "Upcoming games"}
        </Heading>
        <Paragraph>{JSON.stringify(searchResults)}</Paragraph>
      </ContentContainer>
    </Wrapper>
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
