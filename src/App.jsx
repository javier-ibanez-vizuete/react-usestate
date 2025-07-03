import { useState } from "react";
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { TextBox } from "./components/TextBoX/TextBox";
import { ShowText } from "./components/ShowText/ShowText";
import { ColoredBtn } from "./components/ColoredBtn/ColoredBtn";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<SimpleCounter />
			<ToggleButton />
			<TextBox />
			<ShowText />
			<ColoredBtn />
		</>
	);
};
