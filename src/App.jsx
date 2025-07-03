import { useState } from "react";
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { TextBox } from "./components/TextBoX/TextBox";
import { ShowText } from "./components/ShowText/ShowText";
import { ColoredBtn } from "./components/ColoredBtn/ColoredBtn";
import { TaskList } from "./components/TaskList/TaskList";
import { FakeNavigation } from "./components/FakeNavigation/FakeNavigation";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<FakeNavigation btnName={"Inicio"} textContent={"Texto de Inicio"} />
			<FakeNavigation btnName={"Perfil"} textContent={"Texto de Perfil"} />
			<FakeNavigation btnName={"ajustes"} textContent={"Boton ajustes"} />
			<SimpleCounter />
			<ToggleButton />
			<TextBox />
			<ShowText />
			<ColoredBtn />
			<TaskList />
		</>
	);
};
