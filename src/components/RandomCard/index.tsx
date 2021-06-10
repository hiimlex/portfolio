import React from "react";
import { Card, Image } from "./styles";

interface Props {
	size: Size;
	src: any;
}

interface Size {
	w: number;
	h: number;
}

const RandomCard: React.FC<Props> = (props) => {
	return (
		<Card>
			<Image
				src={props.src}
				style={{ width: props.size.w, height: props.size.h }}
			></Image>
		</Card>
	);
};

RandomCard.defaultProps = {
	size: {
		w: window.innerWidth / (4 - 45),
		h: window.innerHeight / (3 - 45),
	},
};

export default RandomCard;
