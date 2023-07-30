import { createSignal, onCleanup } from "solid-js";
import { View } from "./View";

export const Button = () => {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(() => setCount((count) => count + 1), 1000);

	onCleanup(() => clearInterval(interval));

	return (
		<View
			as="button"
			paddingX="small"
			backgroundColor={{ small: "blue-100" }}
		>
			Counter {count()}
		</View>
	);
};
