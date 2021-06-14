import styled from "styled-components";

interface StyledProps {
	animation: any;
}

export const Card = styled.div<StyledProps>`
	z-index: 1;
	${(props) => props.animation};
	transition: all 0.5s ease-in-out;
	position: relative;
	overflow: hidden;
	width: fit-content;
	height: fit-content;
	border-radius: 8px !important;

	&:hover {
		box-shadow: 4px 4px 48px rgba(0, 0, 0, 0.6);
	}
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	transform: inherit;
	border-radius: 8px !important;

	&:hover {
		transform: scale(1.4);
	}
`;
