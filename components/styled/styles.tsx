import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
`;

export const Paragraph = styled.Text`
  margin-top: 10px;
  font-family: MontserratSemiBold;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParagraphPrimaryColor = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: MontserratSemiBold;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.divider};
`;

export const HeaderContent = styled.View`
  margin-top: 40px;
  margin-bottom: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  align-items: center;
`;

export const SearchBarContainer = styled.View`
  width: 75%;
  max-width: 600px;
  border-radius: 200px;
  border: 2px solid ${({ theme }) => theme.colors.divider};
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchBarTextInput = styled.TextInput`
  flex: 1;
  padding: 7px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: MontserratSemiBold;
`;

export const ContentContainer = styled.View`
  width: 90%;
  margin-top: 20px;

  margin-left: auto;
  margin-right: auto;
`;

export const GameCard = styled.View`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  width: 150px;
  margin-top: 20px;
  margin-right: 10px;
`;

export const GameCardImage = styled.ImageBackground`
  width: 150px;
  height: 200px;
`;

export const GameCardName = styled.Text`
  margin-top: 10px;
  overflow: hidden;
  font-family: MontserratSemiBold;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.primary};
`;

export const GameCardDate = styled.Text`
  font-family: MontserratSemiBold;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.secondary};
`;
export const GameSummaryContainer = styled.View`
  margin-top: 5px;
`;

export const GameSummaryText = styled.Text`
  font-family: MontserratSemiBold;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const GameModalContainer = styled.ScrollView`
  //height: 530px;
  // border-top-right-radius: 25px;
  //border-top-left-radius: 25px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const GameModalContentContainer = styled.View`
  //border: 1px solid red;
  flex-direction: column;
`;

export const GameModalContentRow = styled.View`
  padding: 20px;
  //border: 1px solid red;
  min-height: 300px;
  //border-bottom-width: 2px;
  //border-bottom-color: ${({ theme }) => theme.colors.divider};
`;

export const AddToCalendarButton = styled.Pressable`
  margin-top: auto;
  margin-bottom: auto;
  align-self: center;
  justify-self: center;
`;

export const DrawerContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const FlexRow = styled.View`
  margin-top: 20px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  background-color: ${({ theme }) => theme.colors.divider};
  height: 2px;
  width: 100%;
`;

export const LoadingIcon = styled.ActivityIndicator`
  align-items: center;
  justify-content: center;
`;
