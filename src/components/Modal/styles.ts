import styled from "styled-components";

interface ImageProps {
	orientation: string;
	index: number;
	key: number;
}

export const OutsideModal = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	background: rgba(0, 0, 0, 0.3);
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	left: 0;
	top: 0;

	@media (max-width: 720px) {
		overflow-y: auto;
	}
`;

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	z-index: 5;
	left: 0;
	top: 0;

	@media (max-width: 720px) {
		overflow-y: auto;
	}
`;

export const Close = styled.div`
	position: absolute;
	right: 8px;
	top: 8px;

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	opacity: 1;
	z-index: 99999;
	transition: all 0.3s ease;

	&:hover {
		opacity: 0.94;
	}

	margin: 0 !important;

	@media (max-width: 720px) {
		right: 8px;
		top: 8px;
	}
`;

export const ModalComponent = styled.div`
	max-width: 92vw;
	min-height: 70vh;
	position: relative;

	border-radius: 12px;
	background: ${(props) => props.theme.colors.background};

	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	z-index: 8;

	* {
		margin: 8px;
	}

	@media (max-width: 720px) {
		position: absolute;
		top: 0;
		min-width: 100vw;
		min-height: 100vh;
		border-radius: 0;
	}
`;

export const ModalContent = styled.div`
	width: 100%;
	height: auto;

	padding: 12px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	position: relative;
`;

export const Carousel = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	margin: 0 !important;
	max-width: 52vw;
	width: 52vw;
	min-width: 38px;
	height: auto;

	@media (max-width: 720px) {
		max-width: 80vw;
		width: auto;
		min-height: 42vw;
		height: auto;
	}
`;

export const ModalImage = styled.img<ImageProps>`
	object-fit: contain;
	border-radius: 12px;
	margin: 0 !important;
	width: ${(props) => (props.orientation === "landscape" ? "52vw" : "auto")};
	height: ${(props) => (props.orientation === "landscape" ? "auto" : "38vw")};

	@media (max-width: 720px) {
		width: ${(props) =>
			props.orientation === "landscape" ? "80vw" : "auto"};
		height: ${(props) =>
			props.orientation === "landscape" ? "auto" : "52vh"};
	}
`;

export const ModalInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: justify;
	flex-wrap: wrap;
	width: 32vw;

	* {
		margin: 18px;
	}

	@media (max-width: 720px) {
		width: 100vw;
		margin: 0;
		padding: 0;
	}
`;

export const Title = styled.h3`
	font-size: 1.8rem;
	line-height: 1.8rem;

	color: ${(props) => props.theme.colors.text};
	font-weight: 700;
`;

export const Description = styled.p`
	font-size: 1rem;
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
	margin: 0 !important;

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
	margin: 0 !important;

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

export const Colabs = styled.i`
	font-size: 1rem;
	color: ${(props) => props.theme.colors.text};
	font-weight: 400;
`;

export const ColabsContent = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 48px;

	* {
		margin: 0 24px;
	}
`;
