import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		title: string;
		colors: {
			primary: string;
			contrast: string;
			background: string;
			text: string;
			shadow: string;
		};
	}
}
