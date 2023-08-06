import { createGlobalTheme } from "@vanilla-extract/css";
import { tokens } from "./tokens";

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
			full: tokens.borders.radii[4],
		},
		sizes: {
			none: tokens.borders.sizes[0],
			small: tokens.borders.sizes[1],
			medium: tokens.borders.sizes[2],
			large: tokens.borders.sizes[3],
			xlarge: tokens.borders.sizes[4],
		},
	},
	spaces: {
		none: tokens.spaces[0],
		small: tokens.spaces[1],
		medium: tokens.spaces[2],
		large: tokens.spaces[3],
		xlarge: tokens.spaces[4],
		"2xlarge": tokens.spaces[5],
		"3xlarge": tokens.spaces[6],
		"4xlarge": tokens.spaces[7],
		"5xlarge": tokens.spaces[8],
	},
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
