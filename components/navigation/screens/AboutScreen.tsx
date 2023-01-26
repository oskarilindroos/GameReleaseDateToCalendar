import {
  Wrapper,
  Paragraph,
  Heading,
  StyledHeader,
  ContentContainer,
} from "../../styled/styled.components";

import Header from "../../Header";

export default function AboutScreen() {
  return (
    <Wrapper>
      <Header />
      <ContentContainer>
        <Heading>About</Heading>
      </ContentContainer>
    </Wrapper>
  );
}
