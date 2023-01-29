import { Pressable, Animated } from "react-native";
import { useTheme } from "styled-components";
import * as Styled from "./styled/styles";

/*
type GameProps = {
  game: {
    name: string;
    cover: {
      id: string;
      image_id: string;
    };
    release_dates: Array<object>;
  };
};*/

export default function GameCard({ game }) {
  const theme = useTheme();

  return (
    <Pressable>
      <Styled.GameCard>
        <Styled.GameCardImage
          imageStyle={{
            borderRadius: theme.borderRadius,
          }}
          style={{ width: 190, height: 250 }}
          resizeMode="cover"
          source={{
            uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.coverId}.png`,
          }}
        ></Styled.GameCardImage>
        <Styled.GameCardName>{game.name}</Styled.GameCardName>
        <Styled.GameCardDate>
          {game.firstReleaseDate != null
            ? game.firstReleaseDate
            : game.releaseDates[0].date}
        </Styled.GameCardDate>
      </Styled.GameCard>
    </Pressable>
  );
}
