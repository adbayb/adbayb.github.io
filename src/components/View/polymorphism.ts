import type { Component, ComponentProps, JSX } from "solid-js";

export type AnyElement = keyof JSX.IntrinsicElements | Component;

type PropsOf<As extends AnyElement> = ComponentProps<As>;

/**
 * Helper to create a polymorphic component
 */
export const createPolymorphComponent = <
	OwnProps extends object,
	AllowedAs extends AnyElement,
	DefaultAs extends AllowedAs,
>(
	Component: (props: PolymorphicProps<OwnProps, AllowedAs>) => JSX.Element
) => {
	return Component as {
		// If `as` is provided consumer-side, use it to infer props:
		<As extends AllowedAs>(props: PolymorphicProps<OwnProps, As>): JSX.Element;
		// Otherwise, use the default `as` element to infer props:
		(props: Omit<PolymorphicProps<OwnProps, DefaultAs>, "as">): JSX.Element;
	};
};

/**
 * Utility type to create polymorphic props by:
 * - Inheriting props from the own provided consumer-side (eg. ViewOwnProps)
 * - Inferring props from the defined `as` element
 */
type PolymorphicProps<OwnProps extends object, As extends AnyElement> = Omit<
	PropsOf<As>,
	keyof OwnProps | "as" | DisallowedAttributes
> &
	OwnProps & {
		as: As;
	};

type DisallowedAttributes = "class" | "style";
