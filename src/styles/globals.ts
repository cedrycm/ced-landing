import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  :root {
    --dark-color: hsl(var(--hue), 100%, 9%);
    --light-color: hsl(var(--hue), 95%, 98%);
    --base: hsl(var(--hue), 95%, 50%);
    --complimentary1: hsl(var(--hue-complimentary1), 95%, 50%);
    --complimentary2: hsl(var(--hue-complimentary2), 95%, 50%);

    --font-family: ${(props) => props.theme.fonts.main};

    --bg-gradient: linear-gradient(
      to bottom,
      hsl(var(--hue), 95%, 99%),
      hsl(var(--hue), 95%, 84%)
    );
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.palette.colors.background1};
    color: ${(props) => props.theme.palette.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .orb-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }
  
  .landing {
    width: 100%;
    padding: 8rem 6rem;
    display: flex;
  }
  
  .overlay {
    width: 86%;
    max-width: 1140px;
    max-height: 640px;
    padding: 8rem 6rem;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.050);
    box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  
  .overlay__inner {
    max-width: 64rem;
  }
`;
export default GlobalStyles;
