import { Pressable, Animated, TouchableHighlight } from "react-native";
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
      <TouchableHighlight onPress={() => console.log(game.name)}>
        <Styled.GameCardImage
          imageStyle={{
            borderRadius: theme.borderRadius,
          }}
          resizeMode="cover"
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
