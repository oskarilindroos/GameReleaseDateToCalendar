import { useEffect, useState } from "react";
import * as Styled from "../../styled/styles";
import { useTheme } from "styled-components/native";
import {
  searchUpcomingGamesByName,
  getGamesNextMonth,
} from "../../../services/api/GamesService";
import GameCard from "../../GameCard";
import { FlatList, useWindowDimensions } from "react-native";

export default function HomeScreen({ route }) {
  const theme = useTheme();

  const [searchPhrase, setSearchPhrase] = useState("");
  const [gamesList, setGamesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const minCols = 2;
  const imageWidth = 150;
  const imageMargin = 10;

  const renderItem = ({ item }) => <GameCard game={item} />;

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

  // Get the games releasing next month
  // This is run when the app first loads and when the user submits an empty searchphrase
  useEffect(() => {
    if (searchPhrase) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getGamesNextMonth();
        setGamesList(result);
      } catch (error) {
        console.log(error);
        setErrorMessage(JSON.stringify(error.message));
        setGamesList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      setGamesList([]);
    };
  }, [searchPhrase]);

  // Set the search phrase state if route.params changes
  // route.params changes when the user submits the search input field and navigates back to home screen
  useEffect(() => {
    setSearchPhrase(route.params);
  }, [route.params]);

  // When the search phrase is changed, call the games service for the search results
  useEffect(() => {
    if (!searchPhrase) return;

    setGamesList([]);
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await searchUpcomingGamesByName(searchPhrase);
        setGamesList(result);
      } catch (error) {
        console.log(error);
        setErrorMessage(JSON.stringify(error.message));
        setGamesList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      setGamesList([]);
    };
  }, [searchPhrase]);

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
          data={gamesList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          initialNumToRender={15}
          getItemLayout={(_, index) => ({
            length: 200,
            offset: 200 * index,
            index,
          })}
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
              {gamesList.length === 0 && !loading && (
                <Styled.Paragraph>No results {errorMessage}</Styled.Paragraph>
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
}
