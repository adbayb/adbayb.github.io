import { createSignal, onCleanup } from "solid-js";
import { View } from "./View";
import { Text } from "./Text";

export const Button = () => {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(() => setCount((count) => count + 1), 1000);

	onCleanup(() => clearInterval(interval));

	return (
		<View
			as="button"
			paddingX="small"
			backgroundColor={{ small: "blue-100", hover: "gray-100" }}
		>
			<Text>Counter {count()}</Text>
		</View>
	);
};
