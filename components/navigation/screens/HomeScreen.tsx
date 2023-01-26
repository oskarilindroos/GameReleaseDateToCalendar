import { View } from "react-native";

import * as Calendar from "expo-calendar";

import {
  Wrapper,
  Paragraph,
  Heading,
  StyledHeader,
  ContentContainer,
} from "../../styled/styled.components";
import { useEffect } from "react";
import Header from "../../Header";

export default function HomeScreen() {
  // TODO: Move in to its own file, this is temporary to check that the API works
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

  return (
    <Wrapper>
      <Header />
      <ContentContainer>
        <Heading>Upcoming games</Heading>
      </ContentContainer>
    </Wrapper>
  );
}
