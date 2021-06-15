/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../utils/windowSize";
import RandomCard from "../RandomCard";
import { Project, randomProject } from "../RandomProject";
import { Container } from "./styles";

const CardContainer: React.FC = () => {
	const [cards, setCards] = useState<Card[] | []>([]);
	const [width, height] = useWindowSize();

	const [counter, setCounter] = useState(0);

	const getList = React.useCallback(async (page: number) => {
		let data: Image[] = [];
		await axios
			.get(`https://picsum.photos/v2/list?page=${page}&limit=${20}`)
			.then((response) => {
				data = response.data;
			})
			.catch((err) => {
				console.error(err);
				return getList(page - 2);
			});

		return data;
	}, []);

	const getRandom = React.useCallback(
		async (width: number, height: number) => {
			let data;
			await axios
				.get(
					`https://picsum.photos/${Number(width).toFixed()}/${Number(
						height
					).toFixed()}`,
					{ responseType: "arraybuffer" }
				)
				.then((response) => {
					let image = btoa(
						new Uint8Array(response.data).reduce(
							(data, byte) => data + String.fromCharCode(byte),
							""
						)
					);
					data = `data:${response.headers[
						"content-type"
					].toLowerCase()};base64,${image}`;
				});
			return data;
		},
		[]
	);

	const createCard = React.useCallback(async () => {
		const cardWidth = (await width) / 4 - 60;
		const cardHeight = (await height) / 3.5 - 60;
		let src;
		if (cardWidth > 120 && cardHeight > 80) {
			await getRandom(cardWidth, cardHeight).then((value) => {
				src = value;
			});
		}

		let card: Card = {
			size: { w: cardWidth, h: cardHeight },
			src: src,
		};

		return card;
	}, [width, height, getRandom]);

	const createList = React.useCallback(async () => {
		const cardWidth = (await (width / 4)) - 60;
		const cardHeight = (await (height / 3.5)) - 60;

		const list = await getList(
			Number(Math.floor(Math.random() * 30).toFixed())
		);

		const cardList: Card[] = [];

		list.forEach((el: Image) => {
			const card: Card = {
				size: { w: cardWidth, h: cardHeight },
				src: el.download_url,
			};
			cardList.push(card);
		});

		return cardList;
	}, [getList, height, width]);

	const generateCardList: any = React.useCallback(async () => {
		if (cards.length !== 20) {
			const list = await createList();
			if (list && list.length > 0) {
				setCards(list);
			} else {
				return generateCardList();
			}
		}
	}, [cards.length, createList]);

	const generateRandomCard = React.useCallback(async () => {
		const index = Math.floor(Math.random() * 20 - 1);
		if (index >= 0 && index <= 20) {
			const fun = Math.floor(Math.random() * 2);
			if (fun === 0) {
				const card: Card = await createCard();
				if (card && typeof card.src !== "undefined" && card.src) {
					setCards((cards) => {
						return [
							...cards.slice(0, index),
							card,
							...cards.slice(index, cards.length - 1),
						];
					});
				}
			} else if (fun === 1) {
				const card: Card = await createCard();
				const project: Project = randomProject();

				card.src =
					project.project[
						Math.floor(Math.random() * project.project.length)
					].url;

				if (card && typeof card.src !== "undefined" && card.src) {
					console.log(card);
					setCards((cards) => {
						return [
							...cards.slice(0, index),
							card,
							...cards.slice(index, cards.length - 1),
						];
					});
				}
			}
		}
	}, [createCard]);

	useEffect(() => {
		generateCardList();
	}, []);

	useEffect(() => {
		if (cards.length !== 20) {
			generateRandomCard();
		}
	}, [cards.length, generateRandomCard]);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounter(counter + 1);
			generateRandomCard();
		}, 5000);
		return () => {
			clearTimeout(id);
		};
	}, [counter]);

	return (
		<Container>
			{cards.map((card: Card | any, key: number) => {
				return <RandomCard key={key} src={card.src} size={card.size} />;
			})}
		</Container>
	);
};

interface Card {
	size: Size;
	src: any;
}

interface Size {
	w: number;
	h: number;
}

interface Image {
	id: number;
	width: number;
	heigh: number;
	download_url: string;
}

export default CardContainer;
