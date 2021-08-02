import { useEffect, useState } from "react";

export default function useKeyPress(targetKey: string): boolean {
	const [keyPressed, setKeyPressed] = useState(false);

	function downHandler(evt: KeyboardEvent): void {
		const { key } = evt;

		if (key === targetKey) {
			setKeyPressed(true);
		}
	}

	const upHandler = (evt: KeyboardEvent): void => {
		const { key } = evt;

		if (key === targetKey) {
			setKeyPressed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);

		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return keyPressed;
}
