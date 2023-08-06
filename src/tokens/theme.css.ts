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
	};
};

/**
 * Default theme that maps core tokens to semantic ones in order to enable contextual specificities (such as platform (web vs mobile), brand, white labels ones).
 * This theme is used for web purposes (mobile first).
 * Each token value are persisted through CSS variables.
 */
export const theme = createGlobalTheme(":root", {
	borders: {
		radii: {
			none: tokens.borders.radii[0],
			small: tokens.borders.radii[1],
			medium: tokens.borders.radii[2],
			large: tokens.borders.radii[3],
			pill: tokens.borders.radii[4],
			circle: tokens.borders.radii[5],
		},
		sizes: {
			none: tokens.borders.sizes[0],
			small: tokens.borders.sizes[1],
			medium: tokens.borders.sizes[2],
			large: tokens.borders.sizes[3],
			xlarge: tokens.borders.sizes[4],
		},
	},
	spaces: createSpacings(),
	sizes: {
		none: tokens.sizes[0],
		small: tokens.sizes[1],
		medium: tokens.sizes[3],
		large: tokens.sizes[6],
		xlarge: tokens.sizes[8],
	},
	typographies: {
		body: {
			fontFamily: tokens.typographies.fonts[0],
			fontSize: tokens.typographies.sizes[2],
			fontWeight: tokens.typographies.weights[1],
		},
	},
	colors: {
		"neutral.transparent": tokens.colors.transparent,
		"neutral.light": tokens.colors.white,
		"neutral.dark": tokens.colors.black,
		"surface.primary": tokens.colors.blue[4],
		"surface.secondary": tokens.colors.blue[2],
		"content.primary": tokens.colors.gray[4],
		"content.secondary": tokens.colors.gray[3],
	},
} as const);
