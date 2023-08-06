import { View } from "./View";
import { Text } from "./Text";
import type { Label } from "./types";

interface ButtonProps {
	children: Label;
}

export const Button = ({ children }: ButtonProps) => {
	return (
		<View
			as="button"
			paddingX="small"
			backgroundColor={{
				default: "surface.primary",
				focus: "surface.secondary",
				hover: "surface.secondary",
			}}
		>
			<Text>{children}</Text>
		</View>
	);
};
