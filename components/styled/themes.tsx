import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#6ED4FF",
    secondary: "#347F9F",
    background: "#06081F",
    gradients: ["#06081F", "#070924", "#0b1357"],
  },
  fontSizes: {
    s: 12,
    m: 16,
    l: 18,
    xl: 22,
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "black",
    secondary: "gray",
    background: "white",
    gradients: ["gray", "white"],
  },
  fontSizes: {
    s: 12,
    m: 16,
    l: 18,
    xl: 22,
  },
};
