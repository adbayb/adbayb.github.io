import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { theme } from "../../tokens";

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
		color: theme.colors,
		backgroundColor: theme.colors,
		position: ["absolute", "relative", "fixed"],
		display: ["none", "block", "inline", "inline-block", "flex"],
		alignItems: ["flex-start", "center", "flex-end"],
		justifyContent: ["flex-start", "center", "flex-end", "space-between"],
		flexDirection: ["row", "row-reverse", "column", "column-reverse"],
		paddingTop: theme.spaces,
		paddingBottom: theme.spaces,
		paddingLeft: theme.spaces,
		paddingRight: theme.spaces,
		marginTop: theme.spaces,
		marginBottom: theme.spaces,
		marginLeft: theme.spaces,
		marginRight: theme.spaces,
		pointerEvents: ["none", "auto"],
		overflow: ["hidden"],
		opacity: [0, 1],
		textAlign: ["left", "center", "right"],
		minWidth: theme.sizes,
		maxWidth: theme.sizes,
		width: theme.sizes,
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

export const createStyles = createSprinkles(properties);

export type StyleProps = Parameters<typeof createStyles>[0];
