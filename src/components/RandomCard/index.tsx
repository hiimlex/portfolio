import React, { useEffect, useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import randomAnimation, { clearAnimation } from "../../utils/randomAnimation";
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
	const [stopAnimation, setStopAnimation] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounter(counter + 1);
			if (!stopAnimation) {
				setAnimation(randomAnimation);
			}
		}, 2500);
		return () => {
			clearTimeout(id);
		};
	}, [counter, stopAnimation]);

	const handleAnimation = (stop: boolean) => {
		if (stop) {
			setAnimation(clearAnimation);
		}
		setStopAnimation(stop);
	};

	return (
		<Card
			animation={animation}
			onMouseEnter={() => {
				handleAnimation(true);
			}}
			onMouseLeave={() => {
				handleAnimation(false);
			}}
		>
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
