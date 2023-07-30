import { createPolymorphicComponent } from "./createPolymorphicComponent";
import { View, type ViewProps } from "./View";

export type TextProps = ViewProps;

const DEFAULT_AS = "span" as const;

export const Text = createPolymorphicComponent<
	TextProps,
	typeof DEFAULT_AS,
	"span" | "p" | "strong" | "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>(({ as = DEFAULT_AS, children }) => {
	return <View as={as}>{children}</View>;
});
