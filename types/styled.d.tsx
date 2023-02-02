import { Dispatch, SetStateAction } from "react";
import "styled-components/native";
import { DefaultTheme } from "styled-components/native";

// Extending the DefaultTheme interface
declare module "styled-components/native" {
  export interface DefaultTheme {
    name: string;
    borderRadius: number;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      success: string;
      secondaryBackground: string;
      headerBackground: string;
      divider: string;
      gradients: Array<string>;
      gradients2: Array<string>;
    };

    fontSizes: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
  }
}

// For passing the setTheme state as props
export interface ThemeStateProps {
  //theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
}
