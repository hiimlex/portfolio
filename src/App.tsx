import React from "react";
import { ThemeProvider } from "styled-components";
import "./animations.css";
import Modal from "./components/Modal";
import AppRouter from "./router";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={dark}>
			<GlobalStyle />
			<AppRouter></AppRouter>
			<Modal />
		</ThemeProvider>
	);
};

export default App;
