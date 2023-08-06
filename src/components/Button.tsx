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
			backgroundColor={{
				default: "neutral.dark",
				hover: "surface.secondary",
			}}
			borderColor="neutral.dark"
			borderStyle="solid"
			borderWidth="small"
			borderRadius="small"
			paddingHorizontal="large"
			paddingVertical="medium"
			color="neutral.light"
			cursor="pointer"
			onClick={() => console.log("click")}
		>
			<Text>{children}</Text>
		</View>
	);
};
