import { css } from "styled-components";

type Animations = "flip" | "mirror";

const animations: Animations[] = ["flip", "mirror"];

const flip = css`
	transform-style: preserve-3d;
	animation: flip 1s forwards;
	animation-delay: 1.5s;

	@keyframes flip {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(180deg);
		}
	}
`;

export const clearAnimation = css`
	animation: none;
	transform: inherit;
`;

const mirror = css`
	transform: rotateX(0deg);
	animation: mirror 1s forwards;
	animation-delay: 1.5s;

	@keyframes mirror {
		from {
			transform: rotateX(0deg);
		}

		to {
			transform: rotateX(180deg);
		}
	}
`;

export default function randomAnima() {
	const random = Math.floor(Math.random() * animations.length);

	const el = animations[random];

	switch (el) {
		case "flip":
			return flip;
		case "mirror":
			return mirror;
		default:
			break;
	}
}
