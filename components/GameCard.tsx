import { TouchableHighlight, Pressable } from "react-native";
import GameCardModal from "./GameCardModal";
import { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <Styled.GameCard>
      <GameCardModal
        game={game}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Pressable
        onPress={() => setShowModal(true)}
        style={{ borderRadius: theme.borderRadius }}
      >
        <Styled.GameCardImage
          imageStyle={{
            borderRadius: theme.borderRadius,
          }}
          source={{
            uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.coverId}.png`,
          }}
        />
      </Pressable>
      <Styled.GameCardName>{game.name}</Styled.GameCardName>
      <Styled.GameCardDate>{game.firstReleaseDate}</Styled.GameCardDate>
    </Styled.GameCard>
  );
}
