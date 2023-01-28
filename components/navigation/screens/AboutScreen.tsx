import {
  Wrapper,
  Paragraph,
  Heading,
  StyledHeader,
  ContentContainer,
} from "../../styled/styled.components";
import { useTheme } from "styled-components/native";

export default function AboutScreen() {
  const theme = useTheme();
  return (
    <Wrapper>
      <ContentContainer>
        <Heading>About</Heading>
        <Paragraph>
          This app lets you search for games using the publicly available game
          database IGDB.com. Tapping on games lets you easily add upcoming game
          release dates to your calendar.
        </Paragraph>
      </ContentContainer>
    </Wrapper>
  );
}
