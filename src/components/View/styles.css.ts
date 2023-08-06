import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "../../tokens";

/**
 * Utility type to extract keys while discarding non stringified ones (eg. symbols)
 * @see https://github.com/microsoft/TypeScript/issues/41196#issuecomment-721828131
 */
type ExtractStringifiedKeys<T extends { [k: string]: unknown }> =
	T extends infer G ? `${string & keyof G}` : never;

const negate = <
	Props extends Record<string, string>,
	Keys extends ExtractStringifiedKeys<Props>,
>(
	props: Props
) => {
	return (Object.keys(props) as Array<Keys>).reduce(
		(withNegativeProps, key) => {
			const value = props[key] as string;

			withNegativeProps[key] = value;

			if (key === "none") return withNegativeProps; // no-op

			withNegativeProps[`-${key}`] = `${calc(value).negate()}`;

			return withNegativeProps;
		},
		{} as Record<Keys | `-${Exclude<Keys, "none">}`, string>
	);
};

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
		borderRadius: theme.borders.radii,
		borderStyle: ["none", "solid"],
		borderWidth: theme.borders.sizes,
		overflow: ["auto", "hidden", "scroll", "visible"],
		pointerEvents: ["none", "auto"],
		userSelect: ["none", "auto"],
		transition: {
			slow: "transform .3s ease, opacity .3s ease",
			fast: "transform .15s ease, opacity .15s ease",
		},
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
		paddingTop: theme.spaces,
		paddingBottom: theme.spaces,
		paddingLeft: theme.spaces,
		paddingRight: theme.spaces,
		marginTop: negate(theme.spaces),
		marginBottom: negate(theme.spaces),
		marginLeft: negate(theme.spaces),
		marginRight: negate(theme.spaces),
		opacity: [0, 1],
		textAlign: ["left", "center", "right"],
		minWidth: theme.sizes,
		maxWidth: theme.sizes,
		width: theme.sizes,
	},
	shorthands: {
		padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
		paddingHorizontal: ["paddingLeft", "paddingRight"],
		paddingVertical: ["paddingTop", "paddingBottom"],
		margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
		marginHorizontal: ["marginLeft", "marginRight"],
		marginVertical: ["marginTop", "marginBottom"],
	},
});

/**
 * Style factory
 */
export const styles = createSprinkles(baseAtoms, colorAtoms, responsiveAtoms);

export type StyleProps = Parameters<typeof styles>[0];
