import { View } from "react-native";
import * as Calendar from "expo-calendar";

import { Wrapper, Paragraph, Heading } from "../../styled/styled.components";
import { useEffect } from "react";
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
      <Heading>Home Screen</Heading>
    </Wrapper>
  );
}
