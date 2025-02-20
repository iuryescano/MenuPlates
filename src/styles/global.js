import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINT } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ::-webkit-scrollbar {
  width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #2c2c31;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9e9ea0;
  } */

  :root{
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      font-size:12px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BLACK_400};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.7);
  }
`;