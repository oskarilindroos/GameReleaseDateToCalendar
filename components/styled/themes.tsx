import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#6ED4FF",
    secondary: "#347F9F",
    background: "#06081F",
    secondaryBackground: "#0d1246",
    headerBackground: "#06081F",
    divider: "#001b36",
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
    secondaryBackground: "#e0e0e0",
    headerBackground: "#e9e9e9",
    divider: "gray",
    gradients: ["white", "#e9e9e9", "#9f9f9f"],
  },
  fontSizes: {
    s: 12,
    m: 16,
    l: 18,
    xl: 22,
  },
};
