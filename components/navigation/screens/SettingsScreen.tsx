import { View, Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { EventRegister } from "react-native-event-listeners";

import {
  Wrapper,
  Paragraph,
  Heading,
  ContentContainer,
  FlexRow,
  Divider,
  StyledHeader,
} from "../../styled/styled.components";

export default function SettingsScreen() {
  const theme = useTheme();
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(true); // Dark theme enabled by default

  const toggleDarkTheme = () => {
    setIsDarkThemeEnabled((value: boolean) => !value);
    EventRegister.emit("toggleDarkTheme", isDarkThemeEnabled);
  };
  return (
    <Wrapper>
      <ContentContainer>
        <Heading>Settings</Heading>
        <FlexRow>
          <Ionicons
            name={isDarkThemeEnabled ? "moon" : "sunny"}
            size={32}
            color={theme.colors.primary}
          />
          <Paragraph style={{ paddingLeft: 15 }}>Dark Mode</Paragraph>
          <Switch
            thumbColor={theme.colors.primary}
            style={{ marginLeft: "auto" }}
            value={isDarkThemeEnabled}
            onValueChange={toggleDarkTheme}
          />
        </FlexRow>
        <Divider />
        <FlexRow>
          <Ionicons
            name="game-controller"
            size={32}
            color={theme.colors.primary}
          />
          <Paragraph style={{ paddingLeft: 15 }}>Select Platform</Paragraph>
          <Ionicons
            style={{ marginLeft: "auto" }}
            name="chevron-forward"
            size={32}
            color={theme.colors.primary}
          />
        </FlexRow>
        <Divider />
        <FlexRow>
          <Ionicons name="calendar" size={32} color={theme.colors.primary} />
          <Paragraph style={{ paddingLeft: 15 }}>Select Calendar</Paragraph>
          <Ionicons
            style={{ marginLeft: "auto" }}
            name="chevron-forward"
            size={32}
            color={theme.colors.primary}
          />
        </FlexRow>
        <Divider />
      </ContentContainer>
    </Wrapper>
  );
}
