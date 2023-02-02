import {
  Pressable,
  Animated,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { useTheme } from "styled-components";
import { ThemeConsumer } from "styled-components/native";
import * as Styled from "./styled/styles";
import { useEffect } from "react";

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
  let animatedValue = new Animated.Value(0);
  let currentValue = 0;

  animatedValue.addListener(({ value }) => {
    currentValue = value;
  });

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const rotateYAnimatedStyle = {
    transform: [{ rotateY: setInterpolate }],
  };

  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Styled.GameCard>
      <TouchableHighlight
        style={{ borderRadius: theme.borderRadius }}
        onPress={flipAnimation}
      >
        <Animated.Image
          source={{
            uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.coverId}.png`,
          }}
          style={[rotateYAnimatedStyle, styles.imageStyle]}
        />
      </TouchableHighlight>
      <Styled.GameCardName>{game.name}</Styled.GameCardName>
      <Styled.GameCardDate>{game.firstReleaseDate}</Styled.GameCardDate>
    </Styled.GameCard>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 200,
    borderRadius: 20,
  },
});
