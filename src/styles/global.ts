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
    background: ${(props) => props.theme.colors.background};
    height: 100vh;
    width: 100vw;
    font-family: "Poppins", sans-serif;
	overflow-x: hidden;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
  }

  body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
	}

body::-webkit-scrollbar-track {
  background: ${(props) =>
		props.theme.colors.shadow};        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: ${(props) =>
		props.theme.colors.contrast};    /* color of the scroll thumb */
  border-radius: 24px;       /* roundness of the scroll thumb */
}
`;
