import Modal from "react-native-modal";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useState } from "react";
import useCalendar from "../hooks/useCalendar";
import { ImageSlider } from "react-native-image-slider-banner";
import { useTheme } from "styled-components";
import * as Styled from "./styled/styles";
import { Game } from "../types/games.d";

interface ModalProps {
  game: Game;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function GameCardModal({
  game,
  showModal,
  setShowModal,
}: ModalProps) {
  const theme = useTheme();
  const { addEvent } = useCalendar();

  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModal(false)}
      onBackButtonPress={() => setShowModal(false)}
      // onSwipeComplete={() => setShowModal(false)}
      backdropOpacity={0.5}
      // swipeDirection={["left", "right"]}
      // swipeThreshold={100}
      style={{
        borderWidth: 2,
        borderColor: theme.colors.divider,
        maxWidth: 700,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Styled.GameModalContainer>
        {game.screenshotURLs && (
          <ImageSlider
            data={game.screenshotURLs}
            autoPlay={false}
            caroselImageStyle={{
              resizeMode: "cover",
              height: 400,
            }}
            blurRadius={100}
            activeIndicatorStyle={{
              backgroundColor: theme.colors.primary,
            }}
            inActiveIndicatorStyle={{
              backgroundColor: theme.colors.secondary,
            }}
            caroselImageContainerStyle={{
              borderBottomWidth: 2,
              borderBottomColor: theme.colors.divider,
            }}
            preview={true}
            closeIconColor={theme.colors.primary}
          />
        )}
        <Styled.GameModalContentContainer>
          <Styled.GameModalContentRow>
            <Styled.Title>{game.name}</Styled.Title>
            <Styled.ParagraphPrimaryColor>
              Release date:
              <Styled.Paragraph>
                {" "}
                {game.firstReleaseDateString} ({game.releasingInString})
              </Styled.Paragraph>
            </Styled.ParagraphPrimaryColor>
            <Styled.ParagraphPrimaryColor>
              Releasing on:{" "}
              <Styled.Paragraph>{game.platforms.join(", ")}</Styled.Paragraph>
            </Styled.ParagraphPrimaryColor>
            {game.summary && (
              <Styled.GameSummaryContainer>
                <Styled.GameSummaryText>
                  "{game.summary}"
                </Styled.GameSummaryText>
              </Styled.GameSummaryContainer>
            )}
          </Styled.GameModalContentRow>
          <Styled.GameModalContentRow>
            <Styled.AddToCalendarButton onPress={() => addEvent(game)}>
              <FontAwesome
                name="calendar-plus-o"
                size={120}
                color={theme.colors.primary}
              />
            </Styled.AddToCalendarButton>
          </Styled.GameModalContentRow>
        </Styled.GameModalContentContainer>
      </Styled.GameModalContainer>
    </Modal>
  );
}
/*
<Styled.GameModalContainerFront
imageStyle={{ opacity: 0.1, resizeMode: "cover" }}
source={{
  uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.coverId}.png`,
}}
>*/

/*<Styled.AddToCalendarButton>
            <FontAwesome
              name="calendar-plus-o"
              size={120}
              color={theme.colors.primary}
            />
          </Styled.AddToCalendarButton>*/
