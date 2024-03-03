import { useEffect, useState } from "react";
import * as Styled from "../../styled/styles";
import { useTheme } from "styled-components/native";
import useGames from "../../../hooks/useGames";
import GameCard from "../../GameCard";
import { FlatList, useWindowDimensions } from "react-native";
import { Game } from "../../../types/games.d";

const HomeScreen = ({ route }: { route: any }) => {
  const theme = useTheme();

  const [searchPhrase, setSearchPhrase] = useState("");
  const {
    games,
    loading,
    error,
    fetchUpcomingGamesByName,
    accessTokenFetched,
    fetchGamesReleasingNextMonth,
  } = useGames();

  const minCols = 2;
  const imageWidth = 150;
  const imageMargin = 10;

  const renderItem = ({ item }: { item: Game }) => <GameCard game={item} />;

  const calcNumColumns = (width: number) => {
    const cols = width / imageWidth;
    const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
    const colsMinusMargin = cols - 2 * colsFloor * imageMargin;
    if (colsMinusMargin < colsFloor && colsFloor > minCols)
      return colsFloor - 1;
    else return colsFloor;
  };
  const { width } = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));

  useEffect(() => {
    setNumColumns(calcNumColumns(width));
  }, [width]);

  useEffect(() => {
    if (accessTokenFetched) {
      if (route.params) {
        fetchUpcomingGamesByName(route.params);
        console.log("Fetching games by name");
      } else {
        fetchGamesReleasingNextMonth();
        console.log("Fetching games releasing next month");
      }
    }
  }, [route.params, accessTokenFetched]);

  return (
    <Styled.Wrapper>
      <Styled.ContentContainer style={{ marginTop: 0 }}>
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
          key={numColumns}
          numColumns={numColumns}
          data={games}
          renderItem={renderItem}
          initialNumToRender={10}
          ListHeaderComponentStyle={{
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            marginTop: 20,
          }}
          ListHeaderComponent={
            <>
              <Styled.Title
                style={{
                  marginBottom: 10,
                }}
              >
                {searchPhrase
                  ? `Search results for '${searchPhrase}'`
                  : "Games releasing soon"}
              </Styled.Title>
              {games.length === 0 && !loading && (
                <Styled.Paragraph>No results {error}</Styled.Paragraph>
              )}
            </>
          }
        />
        {loading && (
          <Styled.LoadingIcon size={"large"} color={theme.colors.primary} />
        )}
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
};

export default HomeScreen;
