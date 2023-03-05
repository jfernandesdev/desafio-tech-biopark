import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font: 400 1rem "Inter", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
  }

  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #4d4d57;
  }

  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
