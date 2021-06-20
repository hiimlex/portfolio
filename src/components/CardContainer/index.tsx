/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useWindowSize from "../../utils/useWindowSize";
import RandomCard from "../RandomCard";
import { Project, randomProject } from "../RandomProject";
import { Container } from "./styles";

const CardContainer: React.FC = () => {
	const [cards, setCards] = useState<Card[] | []>([]);
	const [width, height] = useWindowSize();

	const [counter, setCounter] = useState(0);

	const fetchNewCard = React.useCallback(async () => {
		const index = Math.floor(Math.random() * 20 - 1);
		if (index >= 0 && index <= 20) {
			let card: Card = {
				size: { w: 0, h: 0 },
				src: "",
			};

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
	}, []);

	useEffect(() => {
		if (cards.length !== 20) {
			fetchNewCard();
		}
	}, [cards.length, fetchNewCard]);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounter(counter + 1);
			fetchNewCard();
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
