import useWindowSize from "./useWindowSize";

type SS = "xl" | "lg" | "md" | "sm";

type Grid = {
	row: number;
	column: number;
};

type Response = [SS, Grid];

function useGrid(): Response {
	const [width, height] = useWindowSize();

	let grid = { column: 4, row: 3 };
	let breakpoint: SS = "lg";

	if (width < 120) {
		return [breakpoint, grid];
	}

	if (width > 1440) {
		grid.column = 5;
		breakpoint = "xl";
	}

	if (width < 1200) {
		grid.column = 4;
		breakpoint = "lg";
	}

	if (width < 890) {
		grid.column = 3;
		breakpoint = "md";
	}

	if (width < 680) {
		grid.column = 1;
		breakpoint = "sm";
	}

	if (height > 798) {
		grid.row = 4;
	}

	if (width < 580) {
		grid.row = 3;
	}

	if (width < 432) {
		grid.row = 2;
	}

	if (height < 320) {
		grid.row = 1;
	}

	return [breakpoint, grid];
}

export default useGrid;
