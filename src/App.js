import React from "react";
import MainContent from "./components/MainContent";
import GlobalStyle from "./styles/global";
import CardContainer from "./components/CardContainer";

import Content from "./styles/content";
import useWindowSize from "./utils/windowSize";
import MobileAdvice from "./components/MobileAdvice";

const App = () => {
	const [width, height] = useWindowSize();

	return (
		<>
			<GlobalStyle />

			{width > 420 && (
				<Content>
					<MainContent />
					<CardContainer />
				</Content>
			)}

			{width < 420 && <MobileAdvice></MobileAdvice>}
		</>
	);
};

export default App;
