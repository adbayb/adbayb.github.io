import { createGlobalTheme } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { tokens } from "./tokens";

const createSpacings = () => {
	const absoluteSpacings = {
		small: tokens.spaces[2],
		medium: tokens.spaces[5],
		large: tokens.spaces[7],
	};

	return {
		...absoluteSpacings,
		none: tokens.spaces[0],
		"-small": `${calc(absoluteSpacings.small).negate()}`,
		"-medium": `${calc(absoluteSpacings.medium).negate()}`,
		"-large": `${calc(absoluteSpacings.large).negate()}`,
	} as const;
};

/**
 * Default theme that maps core tokens to semantic ones in order to enable contextual specificities (such as platform (web vs mobile), brand, white labels ones).
 * This theme is used for web purposes (mobile first).
 * Each token value are persisted through CSS variables.
 */
export const theme = createGlobalTheme(":root", {
	spaces: createSpacings(),
	sizes: {
		none: tokens.sizes[0],
		small: tokens.sizes[1],
		medium: tokens.sizes[3],
		large: tokens.sizes[7],
	},
	typographies: {
		body: {
			fontFamily: tokens.typographies.fonts[0],
			fontSize: tokens.typographies.sizes[2],
			fontWeight: tokens.typographies.weights[1],
		},
	},
	colors: {
		light: tokens.colors.gray[0],
		dark: tokens.colors.gray[4],
		primary: tokens.colors.blue[4],
		secondary: tokens.colors.blue[2],
	},
} as const);
