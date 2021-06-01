import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    background: #2A2A2A;
    height: 100vh;
    width: 100vw;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
