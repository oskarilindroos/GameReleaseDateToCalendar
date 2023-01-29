import { Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { EventRegister } from "react-native-event-listeners";
import * as Styled from "../../styled/styles";

export default function SettingsScreen() {
  const theme = useTheme();
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(true); // Dark theme enabled by default

  const toggleDarkTheme = () => {
    setIsDarkThemeEnabled((value: boolean) => !value);
    EventRegister.emit("toggleDarkTheme", isDarkThemeEnabled);
  };
  return (
    <Styled.Wrapper>
      <Styled.ContentContainer>
        <Styled.Title>Settings</Styled.Title>
        <Styled.FlexRow>
          <Ionicons
            name={isDarkThemeEnabled ? "moon" : "sunny"}
            size={32}
            color={theme.colors.primary}
          />
          <Styled.Paragraph style={{ paddingLeft: 15 }}>
            Dark Mode
          </Styled.Paragraph>
          <Switch
            thumbColor={theme.colors.primary}
            style={{ marginLeft: "auto" }}
            value={isDarkThemeEnabled}
            onValueChange={toggleDarkTheme}
          />
        </Styled.FlexRow>
        <Styled.Divider />
        <Styled.FlexRow>
          <Ionicons
            name="game-controller"
            size={32}
            color={theme.colors.primary}
          />
          <Styled.Paragraph style={{ paddingLeft: 15 }}>
            Select Platform
          </Styled.Paragraph>
          <Ionicons
            style={{ marginLeft: "auto" }}
            name="chevron-forward"
            size={32}
            color={theme.colors.primary}
          />
        </Styled.FlexRow>
        <Styled.Divider />
        <Styled.FlexRow>
          <Ionicons name="calendar" size={32} color={theme.colors.primary} />
          <Styled.Paragraph style={{ paddingLeft: 15 }}>
            Select Calendar
          </Styled.Paragraph>
          <Ionicons
            style={{ marginLeft: "auto" }}
            name="chevron-forward"
            size={32}
            color={theme.colors.primary}
          />
        </Styled.FlexRow>
        <Styled.Divider />
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
}
