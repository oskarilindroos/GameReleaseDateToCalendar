import { Pressable, View } from "react-native";
import * as NavigationService from "../../services/NavigationService";
import * as Styled from "../styled/styles";
import SearchBar from "./SearchBar/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export default function Header() {
  const theme = useTheme();

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <Pressable
          onPress={() => NavigationService.toggleDrawer()}
          hitSlop={20}
        >
          <Ionicons name={"menu"} size={45} color={theme.colors.primary} />
        </Pressable>
        <SearchBar />
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
}
