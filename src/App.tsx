import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { ThemeProvider } from "styled-components";
import CardContainer from "./components/CardContainer";
import MainContent from "./components/MainContent";
import MobileAdvice from "./components/MobileAdvice";
import Modal from "./components/Modal";
import { RootState } from "./store/reducers";
import Content from "./styles/content";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";
import useWindowSize from "./utils/windowSize";
import "./animations.css";

function App(props: any) {
	const [width] = useWindowSize();
	const [theme, setTheme] = usePersistedState<any>("theme", dark);

	const toggleTheme = () => {
		console.log(props.modal);
		setTheme(theme.title === "dark" ? light : dark);
	};

	const handleTheme = () => {
		setTimeout(() => {
			setTheme(dark);
		});
	};

	useEffect(() => {
		handleTheme();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{width > 420 && (
				<Content>
					<MainContent toggleTheme={toggleTheme} />
					<CardContainer></CardContainer>
				</Content>
			)}
			{width < 420 && <MobileAdvice></MobileAdvice>}
			<CSSTransition
				in={props.modal}
				timeout={300}
				classNames="modal"
				unmountOnExit
			>
				<Modal />
			</CSSTransition>
		</ThemeProvider>
	);
}

const mapStateToProps = (state: RootState) => ({
	modal: state.modal.modal,
});

export default connect(mapStateToProps)(App);
