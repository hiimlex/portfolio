/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useGrid from "../../utils/useGrid";
import RandomCard from "../RandomCard";
import { Project, randomProject } from "../RandomProject";
import { Container } from "./styles";

const CardContainer: React.FC = () => {
	const [cards, setCards] = useState<Card[] | []>([]);

	const [counter, setCounter] = useState(0);

	const [breakpoint, grid] = useGrid();

	const [size, setSize] = useState<number>(grid.column * grid.row);

	const fetchAllCards = React.useCallback(() => {
		localStorage.setItem("BREAKPOINT", breakpoint);
		for (let i = 0; i < size + 1; i++) {
			fetchCard();
		}
	}, []);

	const fetchCard = React.useCallback(async () => {
		await size;
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

				setCards((cards) => [...cards, card]);
			}
		};
	}, []);

	const fetchNewCard = React.useCallback(async () => {
		await size;
		const index = Math.floor(Math.random() * size);
		if (index >= 0 && index <= size) {
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
		fetchAllCards();
	}, []);

	useEffect(() => {
		if (cards.length > size) {
			cards.pop();
		}
	}, [cards.length, size]);

	useEffect(() => {
		setSize(grid.row * grid.column);
	}, [grid]);

	useEffect(() => {
		if (cards.length < size) {
			fetchNewCard();
		}
	}, [cards.length, fetchNewCard, size]);

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
		<Container
			style={{
				gridTemplateColumns: `repeat(${grid.column}, 1fr)`,
				gridTemplateRows: `repeat(${grid.row}, 1fr)`,
			}}
		>
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
