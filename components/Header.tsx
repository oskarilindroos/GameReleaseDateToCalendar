import { TouchableHighlight } from "react-native";
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
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={theme.colors.headerBackground}
          onPress={() => NavigationService.openDrawer()}
        >
          <Ionicons name={"menu"} size={45} color={theme.colors.primary} />
        </TouchableHighlight>

        <SearchBar />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
