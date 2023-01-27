import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";
import { StatusBar } from "expo-status-bar";
import { navigationRef } from "./services/NavigationService";
import DrawerNavigator from "./components/navigation/DrawerNavigator";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { darkTheme, lightTheme } from "./components/styled/themes";
import Header from "./components/Header";

import { BASE_API_URL } from "@env";

export default function App() {
  const [theme, setTheme] = useState(darkTheme);
  console.log(BASE_API_URL);
  useEffect(() => {
    // Event listener for listening to the toggleDarkTheme event from the Settings Screen
    EventRegister.addEventListener("toggleDarkTheme", (toggled: boolean) => {
      toggled ? setTheme(lightTheme) : setTheme(darkTheme);
    });
    return () => {
      EventRegister.removeEventListener("toggleDarkTheme");
    };
  });

  // Load fonts
  const [loaded] = useFonts({
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <StatusBar style={theme == darkTheme ? "light" : "dark"} />
      <ThemeProvider theme={theme}>
        <Header />
        <NavigationContainer ref={navigationRef} theme={DarkTheme}>
          <DrawerNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
