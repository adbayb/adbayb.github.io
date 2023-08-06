const HARMONY_FACTOR = 2;
const px = (value: number) => `${value}px`;
const rem = (value: number) => `${value}rem`;
const toRemValue = (pxValue: number) => Math.floor(pxValue / 16);

/**
 * A design token is an indivisible design decision of a design system (such as colors, spacing, typography scale, ...)
 * @see https://www.designtokens.org/glossary/
 * @see https://design-tokens.github.io/community-group/format/#types
 */
export const tokens = {
	borders: {
		radii: [px(0), px(2), px(4), px(8), px(9999), "50%"],
		sizes: [
			px(0),
			px(0.5 * HARMONY_FACTOR),
			px(1 * HARMONY_FACTOR),
			px(1.5 * HARMONY_FACTOR),
			px(2 * HARMONY_FACTOR),
		],
	},
	colors: {
		transparent: "transparent",
		black: "black",
		white: "white",
		blue: [
			"rgb(241,244,248)",
			"rgb(226,232,240)",
			"rgb(201,212,227)",
			"rgb(168,186,211)",
			"rgb(119,146,185)",
		],
		gray: [
			"rgb(210,210,210)",
			"rgb(170,170,170)",
			"rgb(112,112,112)",
			"rgb(50,50,50)",
			"rgb(22,22,22)",
		],
		green: [
			"rgb(237,246,242)",
			"rgb(217,236,227)",
			"rgb(184,219,203)",
			"rgb(140,196,170)",
			"rgb(71,161,120)",
		],
		orange: [
			"rgb(246,243,238)",
			"rgb(237,231,219)",
			"rgb(221,210,188)",
			"rgb(200,182,148)",
			"rgb(168,141,86)",
		],
		red: [
			"rgb(248,242,242)",
			"rgb(241,228,228)",
			"rgb(230,205,205)",
			"rgb(214,175,175)",
			"rgb(190,128,128)",
		],
	},
	sizes: [
		rem(0),
		rem(1 * HARMONY_FACTOR),
		rem(2 * HARMONY_FACTOR),
		rem(3 * HARMONY_FACTOR),
		rem(5 * HARMONY_FACTOR),
		rem(8 * HARMONY_FACTOR),
		rem(12 * HARMONY_FACTOR),
		rem(24 * HARMONY_FACTOR),
		rem(36 * HARMONY_FACTOR),
	],
	spaces: [
		rem(0),
		rem(toRemValue(1 * HARMONY_FACTOR)),
		rem(toRemValue(2 * HARMONY_FACTOR)),
		rem(toRemValue(3 * HARMONY_FACTOR)),
		rem(toRemValue(5 * HARMONY_FACTOR)),
		rem(toRemValue(8 * HARMONY_FACTOR)),
		rem(toRemValue(12 * HARMONY_FACTOR)),
		rem(toRemValue(24 * HARMONY_FACTOR)),
		rem(toRemValue(36 * HARMONY_FACTOR)),
	],
	typographies: {
		fonts: [
			'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		],
		sizes: [
			px(11),
			px(13),
			px(16),
			px(18),
			px(20),
			px(24),
			px(28),
			px(36),
			px(48),
		],
		weights: ["100", "400", "900"],
	},
} as const;
