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
				default: "neutralDark",
				hover: "surfaceSecondary",
			}}
			borderColor="neutralDark"
			borderStyle="solid"
			borderWidth="small"
			borderRadius="small"
			paddingHorizontal="large"
			paddingVertical="medium"
			color="neutralLight"
			cursor="pointer"
			onClick={() => console.log("click")}
		>
			<Text>{children}</Text>
		</View>
	);
};
