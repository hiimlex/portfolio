import styled from "styled-components";

export const OutsideModal = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.3);

	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 6;
	left: 0;
	top: 0;
`;

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	left: 0;
	top: 0;
`;

export const Close = styled.div`
	position: absolute;
	right: 12px;
	top: 12px;

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	opacity: 1;
	transition: all 0.3s ease;

	&:hover {
		opacity: 0.94;
	}
`;

export const ModalContent = styled.div`
	width: 88vw;
	min-height: 70vh;
	height: auto;
	padding: 24px;
	border-radius: 12px;
	background: ${(props) => props.theme.colors.background};
	position: relative;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	z-index: 8;
`;

export const Carousel = styled.div`
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	min-width: 38vw;
	max-width: 54vw;
	width: fit-content;
	height: fit-content;
`;

export const ModalInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: justify;
	margin-left: 24px;
	flex: 1;

	* {
		margin: 18px;
	}
`;

export const Title = styled.h3`
	font-size: 2rem;
	line-height: 2rem;

	color: ${(props) => props.theme.colors.text};
	font-weight: 700;
`;

export const Description = styled.p`
	font-size: 1.1rem;
	line-height: 1.4rem;

	color: ${(props) => props.theme.colors.text};
	font-weight: 400;
`;

export const LeftArrow = styled.div`
	position: absolute;
	left: 0;
	top: calc(50% - 32px);
	background: rgba(0, 0, 0, 0.2);
	color: #fff;
	width: 32px;
	height: 48px;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	line-height: 2rem;

	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: rgba(0, 0, 0, 0.4);
	}
`;

export const RightArrow = styled.div`
	position: absolute;
	right: 0;
	top: calc(50% - 32px);
	background: rgba(0, 0, 0, 0.2);
	color: #fff;
	width: 32px;
	height: 48px;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	line-height: 2rem;

	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: rgba(0, 0, 0, 0.4);
	}
`;

export const Button = styled.button`
	text-decoration: none;
	background: none;
	padding: 0.8rem 1.6rem;

	font-size: 1rem;
	line-height: 1rem;

	color: ${(props) => props.theme.colors.text};
	cursor: pointer;
	opacity: 1;

	border: 10px solid;
	border-image-slice: 1;
	border-width: 4px;
	border-image-source: linear-gradient(to left, #00c853, #08ec59);

	transition: all 0.2s ease-in-out;

	&:hover {
		opacity: 0.8;
	}
`;
