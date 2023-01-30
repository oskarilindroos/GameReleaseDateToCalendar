import "react-native-gesture-handler";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Appearance } from "react-native";
import { navigationRef } from "./services/NavigationService";
import DrawerNavigator from "./components/navigation/DrawerNavigator";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { darkTheme, lightTheme } from "./components/styled/themes";
import Header from "./components/Header/Header";

const systemTheme = Appearance.getColorScheme();

export default function App() {
  // Set the initial theme state based on the system theme
  const [theme, setTheme] = useState(
    systemTheme === "dark" ? darkTheme : lightTheme
  );

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
    <ThemeProvider theme={theme}>
      <Header />
      <StatusBar style={theme == darkTheme ? "light" : "dark"} />
      <NavigationContainer ref={navigationRef} theme={DarkTheme}>
        <DrawerNavigator setTheme={setTheme} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
