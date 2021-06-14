import React from "react";
import { Content } from "./styles";

import { FaSmile } from "react-icons/fa";

const MobileAdvice: React.FC = () => {
	return (
		<Content>
			<FaSmile color={"#fff"} size={64}></FaSmile>
			<p>
				Para melhor vizualização, acesse em um dispositivo com resolução
				acima de 678px.
			</p>
		</Content>
	);
};

export default MobileAdvice;
