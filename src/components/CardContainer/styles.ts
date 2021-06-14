import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	position: absolute;
	z-index: 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	padding: 30px;
	place-items: center;
`;
