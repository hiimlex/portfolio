import React, { useEffect, useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import randomAnimation, { clearAnimation } from "../../utils/randomAnimation";
import { Card, Image } from "./styles";

interface Props {
	size: Size;
	src: any;
	description?: string;
	title?: string;
}

interface Size {
	w: number;
	h: number;
}

const RandomCard: React.FC<Props> = (props) => {
	const [counter, setCounter] = useState<number>(0);

	const [animation, setAnimation] =
		useState<FlattenSimpleInterpolation | undefined>(randomAnimation);

	const [stopAnimation, setStopAnimation] = useState<boolean>(false);
	const [local, setLocal] = useState<boolean>(false);

	const [hasTitle, setHasTitle] = useState<boolean>(false);
	const [hasDesc, setHasDesc] = useState<boolean>(false);

	const handleAnimation = (stop: boolean) => {
		if (stop) {
			setAnimation(clearAnimation);
		}
		setStopAnimation(stop);
	};

	const openModalInfo = (project: Props) => {
		if (project) {
			console.log(project);
		}
	};

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

	useEffect(() => {
		if (String(props.src).match("/assets")) {
			setLocal(true);
		} else {
			setLocal(false);
		}
	}, [props.src]);

	useEffect(() => {
		if (
			props.description !== "" &&
			typeof props.description !== "undefined"
		) {
			setHasDesc(true);
		} else {
			setHasDesc(false);
		}
	}, [props.description]);

	useEffect(() => {
		if (props.title !== "" && typeof props.title !== "undefined") {
			setHasTitle(true);
		} else {
			setHasTitle(false);
		}
	}, [props.title]);

	return (
		<>
			<Card
				animation={animation}
				onMouseEnter={() => {
					handleAnimation(true);
				}}
				onMouseLeave={() => {
					handleAnimation(false);
				}}
				hover={hasTitle && hasDesc}
				onClick={() => {
					openModalInfo(props);
				}}
			>
				<Image
					hover={hasTitle && hasDesc}
					src={local ? process.env.PUBLIC_URL + props.src : props.src}
					style={{
						width: props.size.w,
						height: props.size.h,
					}}
				></Image>
			</Card>
		</>
	);
};

RandomCard.defaultProps = {
	size: {
		w: window.innerWidth / (4 - 45),
		h: window.innerHeight / (3 - 45),
	},
};

export default RandomCard;
