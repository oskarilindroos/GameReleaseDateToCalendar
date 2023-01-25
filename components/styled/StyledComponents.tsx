import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient'

/* Style variables */
export const palette = {
    primary: "#6ED4FF",
    secondary: "#347F9F",
    dark: "#06081F",
    gradient: "darkblue",
};

export const fontStyles = {
    paragraphSize: 20,
    headingSize: 24,
    fontFamily: "Montserrat-Regular",
}

/******************/

/* Styled components */
export const Wrapper = styled(LinearGradient).attrs({
    colors: ['#06081F', '#070924', '#0b1357'],
})`
    height: 100%;
    width: 100%;
`

export const Paragraph = styled.Text`
    font-size: ${fontStyles.paragraphSize};
    font-family: ${fontStyles.fontFamily};
    color: ${palette.secondary};
`

export const Heading = styled.Text`
    font-size: ${fontStyles.headingSize};
    font-family: ${fontStyles.fontFamily};
    color: ${palette.primary};
`

export const StyledDrawerContainer = styled.View`
    background-color: ${palette.dark};
    height: 100%;
    width: 100%;
`




/******************/