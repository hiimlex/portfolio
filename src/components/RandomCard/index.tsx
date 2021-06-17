import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { FlattenSimpleInterpolation } from "styled-components";
import { showModal } from "../../store/actions";
import randomAnimation, { clearAnimation } from "../../utils/randomAnimation";
import { getProjectByName } from "../RandomProject";
import { Card, Image } from "./styles";

interface Props {
	size: Size;
	src: any;
	title?: string;
}

interface Size {
	w: number;
	h: number;
}

const mapDispatchToProps = {
	dispachShowModal: showModal,
};

const connector = connect(undefined, mapDispatchToProps);

type RandomCardProps = Props & ConnectedProps<typeof connector>;

const RandomCard: React.FC<RandomCardProps> = (props) => {
	const [counter, setCounter] = useState<number>(0);

	const [animation, setAnimation] =
		useState<FlattenSimpleInterpolation | undefined>(randomAnimation);

	const [stopAnimation, setStopAnimation] = useState<boolean>(false);
	const [local, setLocal] = useState<boolean>(false);

	const [hasTitle, setHasTitle] = useState<boolean>(false);

	const { dispachShowModal } = props;

	const handleAnimation = (stop: boolean) => {
		if (stop) {
			setAnimation(clearAnimation);
		}
		setStopAnimation(stop);
	};

	const openModalInfo = (proj: Props) => {
		if (proj && proj.title) {
			const project = getProjectByName(proj.title);
			dispachShowModal(project);
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
				hover={hasTitle}
				onClick={() => {
					openModalInfo(props);
				}}
			>
				<Image
					hover={hasTitle}
					src={local ? process.env.PUBLIC_URL + props.src : props.src}
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

export default connector(RandomCard);
