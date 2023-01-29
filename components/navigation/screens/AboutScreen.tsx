import * as Styled from "../../styled/styles";

export default function AboutScreen() {
  return (
    <Styled.Wrapper>
      <Styled.ContentContainer>
        <Styled.Title>About</Styled.Title>
        <Styled.Paragraph>
          This app lets you search for games using the publicly available game
          database IGDB.com. Tapping on games lets you easily add upcoming game
          release dates to your calendar.
        </Styled.Paragraph>
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
}
