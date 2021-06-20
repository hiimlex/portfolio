import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { connect, ConnectedProps } from "react-redux";
import { ThemeContext } from "styled-components";
import { hideModal } from "../../store/actions";
import { RootState } from "../../store/reducers";
import "./animations.css";
import {
	Button,
	Carousel,
	Close,
	Colabs,
	ColabsContent,
	Description,
	LeftArrow,
	ModalComponent,
	ModalContent,
	ModalImage,
	ModalInfo,
	OutsideModal,
	Overlay,
	RightArrow,
	Title,
} from "./styles";

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

	const handleOrientation: any = () => {
		setCan(false);
		if (modal) {
			const image: HTMLImageElement = new Image();
			image.src = process.env.PUBLIC_URL + modal.project[index].url;
			image.onload = () => {
				if (image && image.width > 0 && image.height > 0) {
					if (image.width < image.height) {
						setOrientation("portrait");
						setTimeout(() => {
							setCan(true);
						}, 800);
					} else {
						setOrientation("landscape");
						setTimeout(() => {
							setCan(true);
						}, 800);
					}
				} else {
					setCan(false);
				}
			};
		}
	};

	useEffect(() => {
		handleOrientation();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modal, orientation, dispatchHideModal]);

	useEffect(() => {
		if (!can) {
			handleOrientation();
		}

		if (!clicked) {
			const id = setTimeout(() => {
				setCounter(counter + 1);

				if (modal) {
					if (index >= 0) {
						if (index >= modal.project.length - 1) {
							setIndex(0);
						} else {
							handleNavCarousel(1);
						}
					}
				}
			}, 2000);
			return () => {
				clearTimeout(id);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter, clicked]);

	const onCloseButtonClick = () => {
		setIndex(0);
		setCounter(0);
		dispatchHideModal();
	};

	const handleNavCarousel = (prev: number) => {
		setClicked(true);
		setTimeout(() => {
			setClicked(false);
		}, 1000);
		setIndex(index + prev);
	};

	if (!modal) {
		return null;
	}

	return (
		<Overlay>
			<OutsideModal onClick={onCloseButtonClick}></OutsideModal>
			{can && (
				<ModalComponent>
					<ModalContent>
						<Close onClick={onCloseButtonClick}>
							<MdClose
								size={24}
								color={theme.colors.text}
							></MdClose>
						</Close>
						<Carousel>
							{modal &&
								orientation &&
								can &&
								modal.project.map(
									(
										el: { title: string; url: string },
										key: number
									) => {
										return (
											key === index && (
												<ModalImage
													key={key}
													orientation={orientation}
													alt={el.title}
													index={index}
													src={
														process.env.PUBLIC_URL +
														el.url
													}
												></ModalImage>
											)
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
						<ColabsContent>
							{(modal.colabs &&
								modal.colabs.map(
									(colab: any, index: number) => {
										return (
											<Colabs key={index}>{colab}</Colabs>
										);
									}
								)) || <Colabs>Developed by @me</Colabs>}
						</ColabsContent>
					</ModalContent>
				</ModalComponent>
			)}

			{!can && (
				<div className="lds-roller">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
		</Overlay>
	);
};

export default connector(Modal);
