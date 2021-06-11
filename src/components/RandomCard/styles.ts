import styled from "styled-components";

interface StyledProps {
	animation: any;
}

export const Card = styled.div<StyledProps>`
	width: fit-content;
	height: fit-content;
	z-index: 1;
	${(props) => props.animation};
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	border-radius: 8px;
`;
