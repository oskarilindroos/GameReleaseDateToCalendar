import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import {
  StyledTextInput,
  StyledSearchBarContainer,
} from "./styled/styled.components";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  const theme = useTheme();
  return (
    <StyledSearchBarContainer>
      <StyledTextInput
        placeholder="Search for a game"
        placeholderTextColor={theme.colors.secondary}
      ></StyledTextInput>
      <Ionicons
        style={{ paddingRight: 20 }}
        name={"search"}
        size={22}
        color={theme.colors.primary}
      />
    </StyledSearchBarContainer>
  );
}
