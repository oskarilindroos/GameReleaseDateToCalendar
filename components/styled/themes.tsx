import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  borderRadius: 15,
  colors: {
    primary: "#6ED4FF",
    secondary: "#347F9F",
    background: "#06081F",
    secondaryBackground: "#0d1246",
    headerBackground: "#06081F",
    divider: "#001b36",
    gradients: ["#06081F", "#111a6a"],
    gradients2: ["#111a6a", "#06081F"],
  },
  fontSizes: {
    s: 12,
    m: 16,
    l: 18,
    xl: 22,
  },
};

export const lightTheme: DefaultTheme = {
  borderRadius: 15,

  colors: {
    primary: "black",
    secondary: "gray",
    background: "white",
    secondaryBackground: "#ffffff",
    headerBackground: "#f6f6f6",
    divider: "gray",
    gradients: ["white", "#9f9f9f"],
    gradients2: ["#111a6a", "#06081F"],
  },
  fontSizes: {
    s: 12,
    m: 16,
    l: 18,
    xl: 22,
  },
};
