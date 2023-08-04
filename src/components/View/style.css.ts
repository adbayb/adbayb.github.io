import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { calc } from "@vanilla-extract/css-utils";
import { styleVariable } from "../Global";

const spacing = styleVariable.spacing;
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
		color: styleVariable.color,
		backgroundColor: styleVariable.color,
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
		minWidth: styleVariable.width,
		maxWidth: styleVariable.width,
		width: styleVariable.width,
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

export const styleKeys = Object.keys(properties.styles) as Array<
	keyof StyleProps
>;

export const style = createSprinkles(properties);

export type StyleProps = Parameters<typeof style>[0];
