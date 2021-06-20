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
	object-fit: cover;
	transition: all 0.5s ease-in-out;
	transform: inherit;
	border-radius: 8px !important;
	image-rendering: optimizeQuality;

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
