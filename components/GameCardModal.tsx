import Modal from "react-native-modal";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Pressable, Button } from "react-native";
import { useTheme } from "styled-components";
import * as Styled from "./styled/styles";

export default function GameCardModal({ game, showModal, setShowModal }) {
  const theme = useTheme();
  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModal(false)}
      onBackButtonPress={() => setShowModal(false)}
      backdropOpacity={0.5}
    >
      <Styled.GameModalContainerBack>
        <Styled.GameModalContainerFront
          imageStyle={{ opacity: 0.1, resizeMode: "cover" }}
          source={{
            uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.coverId}.png`,
          }}
        >
          <Styled.Title>{game.name}</Styled.Title>
          <Styled.ParagraphPrimaryColor>
            Release date:
            <Styled.Paragraph>
              {" "}
              {game.firstReleaseDate} (in {game.releasingIn} days)
            </Styled.Paragraph>
          </Styled.ParagraphPrimaryColor>
          {game.summary && (
            <Styled.GameSummaryContainer>
              <Styled.GameSummaryText>"{game.summary}"</Styled.GameSummaryText>
            </Styled.GameSummaryContainer>
          )}
          <Styled.AddToCalendarButton>
            <FontAwesome
              name="calendar-plus-o"
              size={120}
              color={theme.colors.primary}
            />
          </Styled.AddToCalendarButton>
        </Styled.GameModalContainerFront>
      </Styled.GameModalContainerBack>
    </Modal>
  );
}

/*
 <Pressable>
            <Ionicons
              name={"close-circle-outline"}
              size={50}
              color={theme.colors.primary}
            />
          </Pressable>
          */
