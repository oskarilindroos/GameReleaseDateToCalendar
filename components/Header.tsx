import { Pressable, View } from "react-native";
import * as NavigationService from "../services/NavigationService";
import SearchBar from "./SearchBar";
import {
  StyledHeader,
  StyledHeaderContent,
  StyledTextInput,
} from "./styled/styled.components";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export default function Header() {
  const theme = useTheme();

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Pressable onPress={() => NavigationService.openDrawer()} hitSlop={20}>
          <Ionicons name={"menu"} size={45} color={theme.colors.primary} />
        </Pressable>
        <SearchBar />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
