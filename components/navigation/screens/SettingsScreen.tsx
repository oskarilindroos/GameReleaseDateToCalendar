import { Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import * as Styled from "../../styled/styles";
import { darkTheme, lightTheme } from "../../styled/themes";
import { ThemeStateProps } from "../../../types/styled.d";

export default function SettingsScreen({ setTheme }: ThemeStateProps) {
  const theme = useTheme();
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(
    theme.name === "dark-theme" ? true : false
  );

  const toggleTheme = (toggled: boolean) => {
    setIsDarkThemeEnabled(toggled);
    isDarkThemeEnabled ? setTheme(lightTheme) : setTheme(darkTheme);
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
            onValueChange={(value) => {
              toggleTheme(value);
            }}
            value={isDarkThemeEnabled}
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
