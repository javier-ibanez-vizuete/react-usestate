import { useState } from "react";
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<SimpleCounter />
			<ToggleButton />
		</>
	);
};
