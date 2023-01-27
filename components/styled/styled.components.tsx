import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled(LinearGradient)`
  height: 100%;
  width: 100%;
`;

export const StyledHeader = styled.View`
  background-color: ${(props) => props.theme.colors.headerBackground};
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.colors.divider};
`;

export const StyledHeaderContent = styled.View`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Paragraph = styled.Text`
  font-family: MontserratSemiBold;
  font-size: ${(props) => props.theme.fontSizes.l};
  color: ${(props) => props.theme.colors.secondary};
`;

export const Heading = styled.Text`
  font-family: MontserratSemiBold;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.primary};
`;

export const DrawerContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 75px;
  height: 100%;
  width: 100%;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: 7px;
  padding-left: 10px;
  color: ${(props) => props.theme.colors.primary};
  font-family: MontserratSemiBold;
`;

export const StyledSearchBarContainer = styled.View`
  margin-left: 20px;
  width: 75%;
  border-radius: 200px;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  align-items: center;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex: 1;
  width: 90%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  //border: 1px solid red;
`;

export const FlexRow = styled.View`
  margin-top: 20px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  background-color: ${(props) => props.theme.colors.divider};
  height: 2px;
  width: 100%;
`;
