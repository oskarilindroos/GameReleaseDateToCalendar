import { View, Switch } from "react-native";
import { useState } from "react";
import { EventRegister } from "react-native-event-listeners";

import {
  Wrapper,
  Paragraph,
  Heading,
  MainContentContainer,
} from "../../styled/styled.components";

export default function SettingsScreen() {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(true); // Dark theme enabled by default

  const toggleDarkTheme = () => {
    setIsDarkThemeEnabled((value: boolean) => !value);
    EventRegister.emit("toggleDarkTheme", isDarkThemeEnabled);
  };
  return (
    <Wrapper>
      <Heading>Settings</Heading>
      <MainContentContainer>
        <Paragraph>Dark theme</Paragraph>
        <Switch value={isDarkThemeEnabled} onValueChange={toggleDarkTheme} />
      </MainContentContainer>
    </Wrapper>
  );
}
