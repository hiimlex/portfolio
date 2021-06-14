import axios from "axios";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../utils/windowSize";
import RandomCard from "../RandomCard";
import { Container } from "./styles";

const CardContainer: React.FC = () => {
	const [cards, setCards] = useState<Card[] | []>([]);
	const [width, height] = useWindowSize();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [grid, setGrid] = useState<Grid>({
		column: 4,
		row: 3,
	});
	const [counter, setCounter] = useState(0);
	const handleGrid = React.useCallback(async () => {
		let row;
		let column;
		let w = await width;
		let h = await height;

		if (w === 0 || h === 0) {
			w = window.innerWidth;
			h = window.innerHeight;
		}

		if (w > 1400) {
			column = 5;
		} else if (w <= 1400 && w >= 980) {
			column = 4;
		} else if (w <= 980 && w >= 580) {
			column = 3;
		} else if (w <= 580) {
			column = 1;
		}

		if (h >= 1200) {
			row = 4;
		} else if (h <= 1200 && h >= 720) {
			row = 3;
		} else if (h <= 720) {
			row = 3;
		}

		if (column && row) {
			setGrid({ column, row });
		}
	}, [width, height]);

	const getList = React.useCallback(
		async (page: number) => {
			await handleGrid();
			let data: Image[] = [];
			await axios
				.get(
					`https://picsum.photos/v2/list?page=${page}&limit=${
						grid.column * grid.row
					}`
				)
				.then((response) => {
					data = response.data;
				})
				.catch((err) => {
					console.error(err);
					return getList(page - 10);
				});
			return data;
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[grid.column, grid.row]
	);

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
		const cardWidth = width / grid.column - 60;
		const cardHeight = height / grid.row - 60;
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
	}, [width, grid.column, grid.row, height, getRandom]);

	const createList = React.useCallback(async () => {
		const cardWidth = (await (width / grid.column)) - 60;
		const cardHeight = (await (height / grid.row)) - 60;

		if (cardWidth > 120 && cardHeight > 80) {
			const list = await getList(
				Number(Math.floor(Math.random() * 100).toFixed())
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
		}
	}, [getList, grid.column, grid.row, height, width]);

	const generateCardList = React.useCallback(async () => {
		if (cards.length !== grid.column * grid.row) {
			const list = await createList();
			if (list && list.length > 0) {
				setCards(list);
			}
		}
	}, [cards.length, createList, grid.column, grid.row]);

	const generateRandomCard = React.useCallback(async () => {
		const index = Math.floor(Math.random() * (grid.column * grid.row) - 1);
		if (index >= 0 && index <= 11) {
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
		}
	}, [grid.column, grid.row, createCard]);

	const destroyCardList = React.useCallback(() => {
		if (cards.length > 0) {
			setCards([]);
		}
	}, [cards.length]);

	useEffect(() => {
		if (width && height) {
			handleGrid();
			destroyCardList();
			generateCardList();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width, height]);

	useEffect(() => {
		if (cards.length !== grid.column * grid.row) {
			generateRandomCard();
		}
	}, [cards.length, generateRandomCard, grid.column, grid.row]);

	useEffect(() => {
		if (width !== 0) {
			generateCardList();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounter(counter + 1);
			generateRandomCard();
		}, 5000);
		return () => {
			clearTimeout(id);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter]);

	return (
		<Container
			style={{ gridTemplateColumns: `repeat(${grid.column}, 1fr)` }}
		>
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

interface Grid {
	column: number;
	row: number;
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
