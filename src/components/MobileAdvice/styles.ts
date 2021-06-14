import styled from "styled-components";

export const Content = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 1.2rem;
	text-align: center;
	color: ${(props) => props.theme.colors.text};
	padding: 24px;

	p {
		margin-top: 18px;
	}
`;
