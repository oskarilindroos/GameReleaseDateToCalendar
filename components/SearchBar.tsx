import { Pressable } from "react-native";
import {
  StyledTextInput,
  StyledSearchBarContainer,
} from "./styled/styled.components";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchBar() {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <StyledSearchBarContainer>
      <Ionicons
        style={{
          paddingLeft: 20,
          paddingRight: 10,
          borderRightWidth: 2,
          borderRightColor: theme.colors.secondary,
        }}
        name={"search"}
        size={22}
        color={theme.colors.primary}
      />
      <StyledTextInput
        placeholder="Search for a game"
        placeholderTextColor={theme.colors.secondary}
        value={searchPhrase}
        onChangeText={(text) => setSearchPhrase(text)}
        onFocus={() => {
          setFocused(true);
        }}
      ></StyledTextInput>
      {focused && searchPhrase.length > 0 && (
        <Pressable onPress={() => setSearchPhrase("")} hitSlop={20}>
          <Ionicons
            style={{
              paddingRight: 20,
            }}
            name={"close"}
            size={30}
            color={theme.colors.primary}
          />
        </Pressable>
      )}
    </StyledSearchBarContainer>
  );
}
