import "styled-components/native";

// Extending the DefaultTheme interface
declare module "styled-components/native" {
  export interface DefaultTheme {
    borderRadius?: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
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
