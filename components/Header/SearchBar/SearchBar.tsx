import { Pressable, Dimensions } from "react-native";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as NavigationService from "../../../services/NavigationService";
import * as Styled from "../../styled/styles";

const screenWidth = Dimensions.get("window").width;
const actualContainerSize = screenWidth - screenWidth * 0.1;
console.log(screenWidth);
console.log(actualContainerSize);

export default function SearchBar() {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const onSubmitSearch = () => {
    NavigationService.navigateTo("Home", searchPhrase);
  };

  return (
    <Styled.SearchBarContainer>
      <Pressable
        onPress={searchPhrase.length > 0 ? onSubmitSearch : null}
        hitSlop={20}
      >
        <Ionicons
          style={{
            paddingLeft: 10,
            paddingRight: 5,
          }}
          name={"search"}
          size={22}
          color={theme.colors.primary}
        />
      </Pressable>
      <Styled.SearchBarTextInput
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
      />
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
    </Styled.SearchBarContainer>
  );
}
