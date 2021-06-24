import styled from "styled-components";

export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: auto;
`;

export const Back = styled.div`
	position: absolute;
	left: 24px;
	top: 24px;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	font-size: 1rem;
	line-height: 1rem;
	color: ${(props) => props.theme.colors.text};

	opacity: 1;
	transition: all 0.3s ease-in-out;

	* {
		margin: 0 2px;
	}

	&:hover {
		text-decoration: underline;
		opacity: 0.8;
	}
`;

export const Container = styled.div`
	width: 92vw;
	max-width: 92vw;
	padding: 12px;
	margin-top: 64px;
	align-items: center;
	justify-self: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 0;
`;

export const Title = styled.h3`
	font-size: 1.6rem;
	line-height: 1.6rem;
	color: ${(props) => props.theme.colors.text};
	font-weight: 500;
	padding: 24px;
	z-index: 0;
`;

export const Projects = styled.div`
	padding: 48px;
	-moz-column-gap: 30px;
	-webkit-column-gap: 30px;
	column-gap: 30px;

	position: relative;
	z-index: 4;
	height: auto;

	@media (max-width: 768px) {
		padding: 0;
		display: flex;
		flex-direction: column;
	}
`;

export const ProjectCard = styled.div`
	display: inline-block;
	width: 20vw;
	background: ${(props) => props.theme.colors.contrast};
	box-shadow: 2px 5px 32px 4px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	height: auto;
	padding: 8px 0;
	margin: 20px 0;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	:hover {
		box-shadow: 0 0 12px ${(props) => props.theme.colors.shadow};
		z-index: 1;
		transform: scale(1.02);
	}

	@media (max-width: 768px) {
		width: 80vw;
	}
`;

export const ProjectTitle = styled.h3`
	font-size: 1.1rem;
	line-height: 1.1rem;
	color: ${(props) => props.theme.colors.text};
	font-weight: 400;
	padding: 16px;
`;

export const ProjectImage = styled.img`
	width: 100%;
	height: auto;
`;
