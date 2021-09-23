import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../themes/themes";
import GlobalStyles from "./globals";
interface ThemeProps {
  children?: any;
}

//select current theme 
const chosenTheme = defaultTheme;
export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={chosenTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
