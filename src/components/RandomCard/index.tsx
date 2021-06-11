import React, { useEffect, useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import randomAnimation from "../../utils/randomAnimation";
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
	const [animation, setAnimation] =
		useState<FlattenSimpleInterpolation | undefined>(randomAnimation);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounter(counter + 1);
			setAnimation(randomAnimation);
		}, 2000);
		return () => {
			clearTimeout(id);
		};
	}, [counter]);

	return (
		<Card animation={animation}>
			<Image
				src={props.src}
				style={{
					width: props.size.w,
					height: props.size.h,
				}}
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
