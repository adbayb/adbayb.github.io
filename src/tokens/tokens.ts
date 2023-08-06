const px = (value: number) => `${value}px`;
const rem = (value: number) => `${value}rem`;
const toRemValue = (pxValue: number) => pxValue / 16;

/**
 * A design token is an indivisible design decision of a design system (such as colors, spacing, typography scale, ...)
 * @see https://www.designtokens.org/glossary/
 * @see https://design-tokens.github.io/community-group/format/#types
 */
export const tokens = {
	borders: {
		radii: [px(0), px(4), px(8), px(12), px(999)],
		// @todo: include border sizes within root size token + move radii upper in the token structure + apply the same logic within typography tokens
		sizes: [px(0), px(2), px(4), px(6), px(8)],
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
		rem(2),
		rem(4),
		rem(6),
		rem(8),
		rem(10),
		rem(12),
		rem(14),
		rem(16),
	],
	spaces: [
		rem(0),
		rem(toRemValue(4)),
		rem(toRemValue(8)),
		rem(toRemValue(12)),
		rem(toRemValue(16)),
		rem(toRemValue(20)),
		rem(toRemValue(24)),
		rem(toRemValue(28)),
		rem(toRemValue(32)),
	],
	typographies: {
		fonts: [
			'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		],
		sizes: [
			px(12),
			px(14),
			px(16),
			px(18),
			px(20),
			px(22),
			px(24),
			px(28),
			px(30),
		],
		weights: ["100", "400", "900"],
	},
} as const;
