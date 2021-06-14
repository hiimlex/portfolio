import React from "react";
import { Content } from "./styles";

import { FaSmile } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const MobileAdvice: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	return (
		<Content>
			<FaSmile color={colors.text} size={64}></FaSmile>
			<p>
				Para melhor vizualização, acesse em um dispositivo com resolução
				acima de 678px.
			</p>
		</Content>
	);
};

export default MobileAdvice;
