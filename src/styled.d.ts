import "styled-components";
interface IPalette {
  colors: {
    primary1: string;
    background1: string;
    accent1: string;
    button: string;
    background2: string;
  };
}
declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      title: string;
      main: string;
    };
    palette: IPalette;
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
