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

	const getRandom = React.useCallback(
		async (width: number, height: number) => {
			let data;
			await axios
				.get(
					`https://picsum.photos/${Number(width).toFixed()}/${Number(
						height
					).toFixed()}/`,
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
		let cardWidth = (await width) / 3 - 60;
		let cardHeight = (await height) / 3 - 60;
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

	const generateRandomCard = React.useCallback(async () => {
		const index = Math.floor(Math.random() * 20 - 1);
		if (index >= 0 && index <= 20) {
			const fun = Math.floor(Math.random() * 2);
			if (fun === 0) {
				const card: Card = await createCard();
				const image = new Image();
				image.src = card.src;
				image.onload = () => {
					if (image.width > 0 && image.height > 0) {
						card.size.h = image.height * 0.8;
						card.size.w = image.width * 0.6;
					}

					if (
						card &&
						typeof card.src !== "undefined" &&
						card.src &&
						card.size.w > 0 &&
						card.size.h > 0
					) {
						setCards((cards) => {
							return [
								...cards.slice(0, index),
								card,
								...cards.slice(index, cards.length - 1),
							];
						});
					}
				};
			} else if (fun === 1) {
				const card: Card = await createCard();
				const project: Project = randomProject();
				card.src =
					project.project[
						Math.floor(Math.random() * project.project.length)
					].url;
				card.description = project.description;
				card.title = project.name;

				const image: HTMLImageElement = new Image();
				image.src = process.env.PUBLIC_URL + card.src;
				image.onload = () => {
					if (
						card &&
						typeof card.src !== "undefined" &&
						card.src &&
						image &&
						image.width > 0 &&
						image.height > 0
					) {
						if (image.width > image.height) {
							card.size.w = image.width / 4;
							card.size.h = image.height / 4;
						} else if (image.width < image.height) {
							card.size.w = image.width / 2.4;
							card.size.h = image.height / 2.4;
						}

						setCards((cards) => {
							return [
								...cards.slice(0, index),
								card,
								...cards.slice(index, cards.length - 1),
							];
						});
					}
				};
			}
		}
	}, [createCard]);

	useEffect(() => {
		if (cards.length !== 20) {
			generateRandomCard();
		}
	}, [cards.length, generateRandomCard]);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounter(counter + 1);
			generateRandomCard();
		}, 3000);
		return () => {
			clearTimeout(id);
		};
	}, [counter]);

	return (
		<Container>
			{cards.map((card: Card, key: number) => {
				return (
					<RandomCard
						key={key}
						src={card.src}
						size={card.size}
						title={card.title}
					/>
				);
			})}
		</Container>
	);
};

interface Card {
	size: Size;
	src: any;
	description?: string;
	title?: string;
}

interface Size {
	w: number;
	h: number;
}

export default CardContainer;
