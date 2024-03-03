import { Game } from "../types/games.d";
import * as Calendar from "expo-calendar";
import { Platform, ToastAndroid } from "react-native";

const useCalendar = () => {
  const calendarExists = async () => {
    const calendars = await Calendar.getCalendarsAsync();
    return calendars.find(
      (calendar) => calendar.title === "Game Release Date Calendar"
    )?.id;
  };

  const eventExists = async (game: Game, calendarId: string) => {
    const events = await Calendar.getEventsAsync(
      [calendarId],
      new Date(game.firstReleaseDate * 1000 - 3600000),
      new Date(game.firstReleaseDate * 1000 + 3600000)
    );
    return events.find((event) => event.title === game.name);
  };

  const getDefaultCalendarSource = async () => {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  };

  const createCalendar = async () => {
    const defaultCalendarSource =
      Platform.OS === "ios"
        ? await getDefaultCalendarSource()
        : {
            isLocalAccount: true,
            name: "Game Release Date Calendar",
            type: "local",
          };

    const newCalendarID = await Calendar.createCalendarAsync({
      title: "Game Release Date Calendar",
      color: "blue",
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: "internalCalendarName",
      ownerAccount: "personal",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });

    return newCalendarID;
  };

  const addEvent = async (game: Game) => {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();

      if (status === "granted") {
        // Check if the calendar exists
        let calendarId = await calendarExists();

        // If the calendar doesn't exist, create it
        if (!calendarId) {
          calendarId = await createCalendar();
        }

        // Check if the event already exists
        const event = await eventExists(game, calendarId);
        if (event) {
          if (Platform.OS === "android") {
            ToastAndroid.show("Event already exists", ToastAndroid.SHORT);
          }
        }

        if (event === undefined) {
          const eventId = await Calendar.createEventAsync(calendarId, {
            title: game.name,
            startDate: new Date(game.firstReleaseDate * 1000),
            endDate: new Date(game.firstReleaseDate * 1000 + 3600000),
            timeZone: "Europe/Warsaw",
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
          });

          if (Platform.OS === "android") {
            ToastAndroid.show("Event added to calendar", ToastAndroid.SHORT);
          }
        }
      }
    } catch (error) {
      console.log(error);

      if (Platform.OS === "android") {
        ToastAndroid.show("Error adding event", ToastAndroid.SHORT);
      }
    }
  };

  //   const addEventIntent = async (game: Game) => {
  //     try {
  //       console.log(new Date(game.firstReleaseDate).getTime());

  //       await startActivityAsync("android.intent.action.INSERT", {
  //         data: "content://com.android.calendar/events",
  //         extra: {
  //           title: game.name,
  //           description: "Game release date",
  //           beginTime: game.firstReleaseDate * 1000,
  //           endTime: game.firstReleaseDate * 1000,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return { addEvent };
};

export default useCalendar;
