import { Pressable } from "react-native";
import {
  StyledTextInput,
  StyledSearchBarContainer,
} from "./styled/styled.components";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as NavigationService from "../services/NavigationService";

export default function SearchBar() {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const onSubmitSearch = () => {
    setSearchPhrase("");
    NavigationService.navigateTo("Home", searchPhrase);
  };

  return (
    <StyledSearchBarContainer>
      <Pressable
        onPress={searchPhrase.length > 0 ? onSubmitSearch : null}
        hitSlop={20}
      >
        <Ionicons
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            borderRightWidth: 2,
            borderRightColor: theme.colors.secondary,
          }}
          name={"search"}
          size={22}
          color={theme.colors.primary}
        />
      </Pressable>
      <StyledTextInput
        placeholder="Search games..."
        placeholderTextColor={theme.colors.secondary}
        cursorColor={theme.colors.primary}
        value={searchPhrase}
        onSubmitEditing={onSubmitSearch}
        maxLength={30}
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
            size={24}
            color={theme.colors.primary}
          />
        </Pressable>
      )}
    </StyledSearchBarContainer>
  );
}
