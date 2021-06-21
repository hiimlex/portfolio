import React, { useContext } from "react";
import { Back, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { ThemeContext } from "styled-components";

const Landing = () => {
	const theme = useContext(ThemeContext);

	return (
		<Content>
			<Back>
				<FiArrowLeft color={theme.colors.text} size={24} /> Voltar
			</Back>
		</Content>
	);
};

export default Landing;
