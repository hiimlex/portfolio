import styled from "styled-components";

export const All = styled.body`
	background: #fff !important;
`;

export const Content = styled.div`
	width: 100vw;

	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff !important;
`;

export const Body = styled.div`
	padding: 20px;
	max-width: 1080px;
	width: 100%;
	align-self: center;
	justify-self: center;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: auto;
`;

export const HeaderTitle = styled.h1`
	font-size: 1.8rem;
	font-weight: bold;
	margin: 0;
	text-align: center;
	color: #333;
`;

export const HeaderSubtitle = styled.h3`
	font-size: 1.6rem;
	font-weight: 600;
	margin: 0;
	color: #555;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	margin-top: 64px;
	flex-wrap: wrap;
	word-wrap: break-all;
	flex: 1 1 auto;
`;

export const ProfissionalInfo = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	text-align: left;
	flex: 0.58;
`;

export const PersonalInfo = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	text-align: left;
	flex: 0.4;
`;

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;

	padding: 4px;
	margin: 18px 0;
`;

export const ArticleTitle = styled.span`
	font-size: 1.2rem;
	color: #0e70ea;
	font-weight: bold;
	margin-bottom: 12px;
	text-transform: uppercase;
`;

export const ArticleContent = styled.p`
	font-size: 0.9rem;
	color: #424242;
	margin: 4px 0;
	padding: 0;
	text-align: justify;
`;

export const Post = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	text-align: left;

	margin: 12px 0;
`;

export const PostTitle = styled.span`
	font-size: 0.9rem;
	color: #363636;
`;

export const PostPeriod = styled.span`
	text-transform: uppercase;
	font-size: 0.9rem;
	color: #888888;
	font-weight: 500;
`;
