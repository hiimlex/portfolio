import React, { useContext, useEffect, useState } from "react";

import { CSSTransition } from "react-transition-group";

import { MdClose } from "react-icons/md";

import { connect, ConnectedProps } from "react-redux";
import { hideModal } from "../../store/actions";
import { RootState } from "../../store/reducers";

import { ThemeContext } from "styled-components";
import {
	Button,
	Carousel,
	CarouselImage,
	Close,
	Description,
	LeftArrow,
	ModalContent,
	ModalInfo,
	OutsideModal,
	Overlay,
	RightArrow,
	Title,
} from "./styles";

import "./animations.css";

const mapStateToProps = (state: RootState) => ({
	modal: state.modal.modal,
});

const mapDispatchToProps = {
	dispatchHideModal: hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ModalProps = {} & ConnectedProps<typeof connector>;

type Orientation = "portrait" | "landscape";

const Modal: React.FC<ModalProps> = (props) => {
	const { dispatchHideModal, modal } = props;
	const theme = useContext(ThemeContext);
	const [counter, setCounter] = useState(0);
	const [clicked, setClicked] = useState(false);
	const [orientation, setOrientation] = useState<Orientation>("landscape");

	const [index, setIndex] = useState(0);
	const [can, setCan] = useState(false);

	const handleOrientation = () => {
		if (modal) {
			const image = new Image();
			image.src = process.env.PUBLIC_URL + modal.project[0].url;

			if (image.width < image.height) {
				setOrientation("portrait");
				setCan(true);
			} else {
				setOrientation("landscape");
				setCan(true);
			}
		}
	};

	useEffect(() => {
		handleOrientation();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modal, orientation]);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounter(counter + 1);
			if (modal) {
				if (index >= 0) {
					if (!clicked) {
						if (index >= modal.project.length - 1) {
							setIndex(0);
						} else {
							handleNavCarousel(1);
						}
					}
				}
			}
		}, 2000);
		return () => {
			clearTimeout(id);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter]);

	const onCloseButtonClick = () => {
		dispatchHideModal();
	};

	const handleNavCarousel = (prev: number) => {
		setClicked(true);
		setTimeout(() => {
			setClicked(false);
		}, 3000);
		setIndex(index + prev);
	};

	if (!modal) {
		return null;
	}

	return (
		<Overlay>
			<OutsideModal onClick={onCloseButtonClick}></OutsideModal>
			<ModalContent>
				<Close onClick={onCloseButtonClick}>
					<MdClose size={24} color={theme.colors.text}></MdClose>
				</Close>
				<Carousel>
					{modal &&
						can &&
						modal.project.map(
							(
								el: { title: string; url: string },
								key: number
							) => {
								return (
									<div key={key}>
										{key === index && (
											<CSSTransition
												in={key === index}
												timeout={{
													appear: 200,
													enter: 400,
													exit: 500,
												}}
												classNames="fade-in"
												unmountOnExit
											>
												<CarouselImage
													alt={el.title}
													src={
														process.env.PUBLIC_URL +
														el.url
													}
													style={{
														width:
															orientation ===
															"landscape"
																? "54vw"
																: "auto",
														height:
															orientation ===
															"landscape"
																? "auto"
																: "28vw",
													}}
												></CarouselImage>
											</CSSTransition>
										)}
									</div>
								);
							}
						)}
					{modal && index > 0 && (
						<LeftArrow
							onClick={() => {
								handleNavCarousel(-1);
							}}
						>
							{"<"}
						</LeftArrow>
					)}
					{modal && index < modal.project.length - 1 && (
						<RightArrow
							onClick={() => {
								handleNavCarousel(1);
							}}
						>
							{">"}
						</RightArrow>
					)}
				</Carousel>
				<ModalInfo>
					<Title>{modal.name}</Title>
					<Description>{modal.description}</Description>
					{modal.url && (
						<Button
							onClick={() => {
								window.open(modal.url, "blank");
							}}
						>
							Acessar MVP
						</Button>
					)}
				</ModalInfo>
			</ModalContent>
		</Overlay>
	);
};

export default connector(Modal);
