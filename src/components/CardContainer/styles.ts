import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	position: relative;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	padding: 20px;
	place-items: center;
	z-index: 0;
`;
