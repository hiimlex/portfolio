import styled from "styled-components";

export const Content = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
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
	width: 88vw;
	height: calc(auto + 240px);
	padding: 12px;
	margin: 120px 80px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

export const Title = styled.h3`
	font-size: 1.4rem;
	line-height: 1.4rem;
	color: ${(props) => props.theme.colors.text};
	font-weight: 400;
`;

export const Projects = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
`;

export const Projeto = styled.div`
	width: 100%;
	background: ${(props) => props.theme.colors.contrast};
	box-shadow: 2px 5px 32px 4px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
`;
