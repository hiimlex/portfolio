import React from "react";
import CardContainer from "../../components/CardContainer";
import MainContent from "../../components/MainContent";
import Content from "../../styles/content";

const Portfolio: React.FC = () => {
	return (
		<Content>
			<MainContent />
			<CardContainer></CardContainer>
		</Content>
	);
};

export default Portfolio;
