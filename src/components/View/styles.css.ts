import { createGlobalTheme } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { calc } from "@vanilla-extract/css-utils";

const px = (value: string | number) => `${value}px`;
const HARMONY_FACTOR = 2;

const vars = createGlobalTheme(":root", {
	font: {
		brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
		heading:
			'"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
		body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
		code: 'ml, "Roboto Mono", Menlo, monospace',
	},
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
		"blue-100": "#eff6ff",
		"blue-200": "#dbeafe",
		"blue-300": "#bfdbfe",
		"gray-100": "#374151",
		"gray-200": "#1f2937",
		"gray-300": "#111827",
	},
});

const spacing = vars.spacing;
const negativeSpacing = {
	["-xsmall"]: `${calc(spacing.xsmall).negate()}`,
	["-small"]: `${calc(spacing.small).negate()}`,
	["-medium"]: `${calc(spacing.medium).negate()}`,
	["-large"]: `${calc(spacing.large).negate()}`,
	["-xlarge"]: `${calc(spacing.xlarge).negate()}`,
	["-xxlarge"]: `${calc(spacing.xxlarge).negate()}`,
	["-xxxlarge"]: `${calc(spacing.xxxlarge).negate()}`,
};

const withNegativeSpacing = {
	...spacing,
	...negativeSpacing,
};

const properties = defineProperties({
	conditions: {
		none: {},
		small: { "@media": "screen and (min-width: 370px)" },
		medium: { "@media": "screen and (min-width: 768px)" },
		large: { "@media": "screen and (min-width: 1024px)" },
		hover: { selector: "&:hover" },
	},
	defaultCondition: "none",
	properties: {
		color: vars.color,
		backgroundColor: vars.color,
		position: ["absolute", "relative", "fixed"],
		display: ["none", "block", "inline", "inline-block", "flex"],
		alignItems: ["flex-start", "center", "flex-end"],
		justifyContent: ["flex-start", "center", "flex-end", "space-between"],
		flexDirection: ["row", "row-reverse", "column", "column-reverse"],
		paddingTop: spacing,
		paddingBottom: spacing,
		paddingLeft: spacing,
		paddingRight: spacing,
		marginTop: withNegativeSpacing,
		marginBottom: withNegativeSpacing,
		marginLeft: withNegativeSpacing,
		marginRight: withNegativeSpacing,
		pointerEvents: ["none", "auto"],
		overflow: ["hidden"],
		opacity: [0, 1],
		textAlign: ["left", "center", "right"],
		minWidth: vars.width,
		maxWidth: vars.width,
		width: vars.width,
		transition: {
			slow: "transform .3s ease, opacity .3s ease",
			fast: "transform .15s ease, opacity .15s ease",
		},
	},
	shorthands: {
		padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
		paddingX: ["paddingLeft", "paddingRight"],
		paddingY: ["paddingTop", "paddingBottom"],
		margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
		marginX: ["marginLeft", "marginRight"],
		marginY: ["marginTop", "marginBottom"],
	},
});

export const styleKeys = Object.keys(properties.styles) as Array<keyof Styles>;

export const styles = createSprinkles(properties);

export type Styles = Parameters<typeof styles>[0];
