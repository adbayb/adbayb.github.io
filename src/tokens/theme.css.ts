import { createGlobalTheme } from "@vanilla-extract/css";

import { tokens } from "./tokens";

/**
 * Default theme that maps core tokens to semantic ones in order to enable contextual specificities (such as platform (web vs mobile), brand, white labels ones).
 * This theme is used for web purposes (mobile first).
 * Each token value are persisted through CSS variables.
 */
export const theme = createGlobalTheme(":root", {
	colors: {
		neutralTransparent: tokens.colors.transparent,
		neutralLight: tokens.colors.white,
		neutralDark: tokens.colors.black,
		surfacePrimary: tokens.colors.blue[4],
		surfaceSecondary: tokens.colors.blue[2],
		contentPrimary: tokens.colors.gray[4],
		contentSecondary: tokens.colors.gray[3],
	},
	depths: {
		none: tokens.depths[0],
		layout: tokens.depths[1],
		popover: tokens.depths[2],
		modal: tokens.depths[3],
		alert: tokens.depths[4],
	},
	radii: {
		none: tokens.radii[0],
		small: tokens.radii[1],
		medium: tokens.radii[2],
		large: tokens.radii[3],
		full: tokens.radii[4],
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
		xlarge: tokens.sizes[7],
	},
	thicknesses: {
		none: tokens.thicknesses[0],
		small: tokens.thicknesses[1],
		medium: tokens.thicknesses[2],
		large: tokens.thicknesses[3],
		xlarge: tokens.thicknesses[4],
	},
	typographies: {
		body: {
			fontFamily: tokens.fonts[0],
			fontSize: tokens.fontSizes[2],
			fontWeight: tokens.fontWeights[1],
		},
	},
});
