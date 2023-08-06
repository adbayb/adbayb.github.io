import { calc } from "@vanilla-extract/css-utils";

/**
 * Utility type to extract keys while discarding non stringified ones (eg. symbols)
 * @see https://github.com/microsoft/TypeScript/issues/41196#issuecomment-721828131
 */
type ExtractStringifiedKeys<T extends { [k: string]: unknown }> =
	T extends infer G ? `${string & keyof G}` : never;

export const negate = <
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
