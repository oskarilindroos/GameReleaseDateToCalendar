import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

//const gradients:Array<string> =
/*
export const Wrapper = styled(LinearGradient).attrs({
  colors: [],
})`
  height: 100%;
  width: 100%;
  font-family: "Montserrat-Regular";
  font-size: 20px;
`;*/

export const Wrapper = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  width: 100%;
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

export const StyledDrawerContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  width: 100%;
`;

export const SettingsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  //border: 1px solid red;
`;
