import "styled-components/native";

// Extending the DefaultTheme interface
declare module "styled-components/native" {
  export interface DefaultTheme {
    borderRadius?: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      gradients: Array<string>;
    };

    fontSizes: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
  }
}
