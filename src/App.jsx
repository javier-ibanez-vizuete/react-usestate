import { useState } from "react";
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { TextBox } from "./components/TextBoX/TextBox";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<SimpleCounter />
			<ToggleButton />
			<TextBox />
		</>
	);
};
