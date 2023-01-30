import { TouchableHighlight } from "react-native";
import { useTheme } from "styled-components";
import * as Styled from "./styled/styles";

type GameProps = {
  game: {
    id: number;
    name: string;
    coverId: number;
    releaseDates: Array<string>;
    firstReleaseDate: string;
  };
};

export default function GameCard({ game }: GameProps) {
  const theme = useTheme();

  return (
    <Styled.GameCard>
      <TouchableHighlight style={{ borderRadius: theme.borderRadius }}>
        <Styled.GameCardImage
          imageStyle={{
            borderRadius: theme.borderRadius,
          }}
          source={{
            uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.coverId}.png`,
          }}
        />
      </TouchableHighlight>
      <Styled.GameCardName>{game.name}</Styled.GameCardName>
      <Styled.GameCardDate>{game.firstReleaseDate}</Styled.GameCardDate>
    </Styled.GameCard>
  );
}
