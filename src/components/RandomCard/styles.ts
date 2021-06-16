import styled from "styled-components";

interface StyledProps {
	animation: any;
	hover: any;
}

interface HoverProps {
	hover: any;
}

export const Card = styled.div<StyledProps>`
	${(props) => props.animation};
	transition: all 0.5s ease-in-out;
	position: relative;
	overflow: hidden;
	width: fit-content;
	height: fit-content;
	border-radius: 8px !important;

	${(props) => {
		if (props.hover) {
			return `&:hover {
			box-shadow: 2px 2px 24px ${props.theme.colors.shadow};
		}`;
		}
	}}
`;

export const Image = styled.img<HoverProps>`
	width: 100%;
	height: auto;
	transition: all 0.5s ease-in-out;
	transform: inherit;
	border-radius: 8px !important;
	image-rendering: optimizeSpeed;

	${(props) => {
		if (props.hover) {
			return `
			cursor: pointer;
			&:hover {
				transform: scale(1.4);
			}`;
		}
	}}
`;

export const OutsideModal = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.2);
	overflow: hidden;
	position: absolute;
	//do not do that please i'm beggin u
	//SORRY MOM

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Modal = styled.div`
	width: 92vw;
	height: auto;
	padding: 24px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.colors.background};
`;
