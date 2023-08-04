import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

/**
 * CSS variables
 */
const px = (value: string | number) => `${value}px`;
const HARMONY_FACTOR = 2;

// @todo: tokens/theme
export const styleVariable = createGlobalTheme(":root", {
	font: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	spacing: {
		none: "0",
		xsmall: px(1 * HARMONY_FACTOR),
		small: px(2 * HARMONY_FACTOR),
		medium: px(3 * HARMONY_FACTOR),
		large: px(5 * HARMONY_FACTOR),
		xlarge: px(8 * HARMONY_FACTOR),
		xxlarge: px(12 * HARMONY_FACTOR),
		xxxlarge: px(24 * HARMONY_FACTOR),
	},
	width: {
		xsmall: px(480),
		small: px(600),
		standard: px(740),
		large: px(960),
		xlarge: px(1120),
		xxlarge: px(1350),
	},
	weight: {
		regular: "400",
		strong: "700",
	},
	border: {
		width: {
			small: px(1 * HARMONY_FACTOR),
			medium: px(2 * HARMONY_FACTOR),
			large: px(4 * HARMONY_FACTOR),
		},
		radius: {
			small: px(2 * HARMONY_FACTOR),
			medium: px(4 * HARMONY_FACTOR),
			large: px(7 * HARMONY_FACTOR),
			rounded: "9999px",
		},
	},
	color: {
		"blue-10": "rgb(241,244,248)",
		"blue-20": "rgb(226,232,240)",
		"blue-30": "rgb(201,212,227)",
		"blue-40": "rgb(168,186,211)",
		"blue-50": "rgb(119,146,185)",
		"gray-10": "rgb(255,255,255)",
		"gray-20": "rgb(243,243,243)",
		"gray-30": "rgb(213,213,213)",
		"gray-40": "rgb(117,117,117)",
		"gray-50": "rgb(0,0,0)",
		"green-10": "rgb(237,246,242)",
		"green-20": "rgb(217,236,227)",
		"green-30": "rgb(184,219,203)",
		"green-40": "rgb(140,196,170)",
		"green-50": "rgb(71,161,120)",
		"orange-10": "rgb(246,243,238)",
		"orange-20": "rgb(237,231,219)",
		"orange-30": "rgb(221,210,188)",
		"orange-40": "rgb(200,182,148)",
		"orange-50": "rgb(168,141,86)",
		"red-10": "rgb(248,242,242)",
		"red-20": "rgb(241,228,228)",
		"red-30": "rgb(230,205,205)",
		"red-40": "rgb(214,175,175)",
		"red-50": "rgb(190,128,128)",
	},
});

/**
 * CSS reset
 */
globalStyle(`*`, {
	all: "unset",
	display: "revert",
});

globalStyle("html, body", {
	margin: 0,
	padding: 0,
});

globalStyle("html", {
	boxSizing: "border-box",
	fontFamily: styleVariable.font,
	fontSize: 16,
});

globalStyle("*, *::before, *::after", {
	boxSizing: "inherit",
});
