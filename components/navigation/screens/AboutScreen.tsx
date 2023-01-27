import {
  Wrapper,
  Paragraph,
  Heading,
  StyledHeader,
  ContentContainer,
} from "../../styled/styled.components";
import { useTheme } from "styled-components/native";

const backgroundImage = { uri: "https://reactjs.org/logo-og.png" };

export default function AboutScreen() {
  const theme = useTheme();
  return (
    <Wrapper colors={theme.colors.gradients}>
      <ContentContainer>
        <Heading>About</Heading>
      </ContentContainer>
    </Wrapper>
  );
}
