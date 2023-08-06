import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { theme } from "../../../tokens";
import * as dimension from "./properties/dimension";
import * as margin from "./properties/margin";
import * as padding from "./properties/padding";

/**
 * Basic collection of atoms (or utility classes) that are not impacted by some conditions (such as responsive ones).
 * An atom prevents CSS code duplication by sharing single-purpose class name following the atomic CSS approach.
 *
 * Several set of utility classes have been created to optimize the way vanilla extract generates class names.
 * Indeed, it will generate the styles for all defined properties regardless if used or not.
 * The number of CSS rules is even more increased if some `conditions` are defined (basically, the properties will be generated per defined condition as well).
 * It's important to make sure to define only conditions and values that are needed.
 */
const baseAtoms = defineProperties({
	properties: {
		cursor: ["none", "default", "pointer"],
		borderRadius: theme.radii,
		borderStyle: ["none", "solid"],
		borderWidth: theme.thicknesses,
		overflow: ["auto", "hidden", "scroll", "visible"],
		pointerEvents: ["none", "auto"],
		transition: {
			slow: "transform .3s ease, opacity .3s ease",
			fast: "transform .15s ease, opacity .15s ease",
		},
		userSelect: ["none", "auto"],
		zIndex: theme.depths,
	},
});

/**
 * Color utility
 */
const colorAtoms = defineProperties({
	conditions: {
		default: {},
		hover: { selector: "&:hover" },
		focus: { selector: "&:focus" },
		active: { selector: "&:active" },
	},
	defaultCondition: "default",
	properties: {
		color: theme.colors,
		backgroundColor: theme.colors,
		borderColor: theme.colors,
	},
});

/**
 * Responsive atoms
 */
const responsiveAtoms = defineProperties({
	conditions: {
		default: {},
		small: { "@media": "screen and (min-width: 370px)" },
		medium: { "@media": "screen and (min-width: 768px)" },
		large: { "@media": "screen and (min-width: 1024px)" },
	},
	defaultCondition: "default",
	properties: {
		...dimension.properties,
		...margin.properties,
		...padding.properties,
		position: ["absolute", "relative", "fixed", "sticky"],
		display: ["none", "block", "inline", "flex", "inline-flex", "grid"],
		alignItems: ["flex-start", "center", "flex-end", "stretch"],
		justifyContent: [
			"flex-start",
			"center",
			"flex-end",
			"space-between",
			"space-around",
		],
		flexDirection: ["column", "row"],
		gap: theme.spaces,
		opacity: [0, 1],
		textAlign: ["left", "center", "right"],
	},
	shorthands: {
		...margin.shorthands,
		...padding.shorthands,
	},
});

/**
 * Style factory
 */
export const styles = createSprinkles(baseAtoms, colorAtoms, responsiveAtoms);

export type StyleProps = Parameters<typeof styles>[0];
