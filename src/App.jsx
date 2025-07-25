import { useState } from "react";
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { TextBox } from "./components/TextBoX/TextBox";
import { ShowText } from "./components/ShowText/ShowText";
import { ColoredBtn } from "./components/ColoredBtn/ColoredBtn";
import { TaskList } from "./components/TaskList/TaskList";
import { FakeNavigation } from "./components/FakeNavigation/FakeNavigation";
import { CheckBox } from "./components/CheckBox/CheckBox";
import { ImageChanger } from "./components/ImageChanger/ImageChanger";
import { LikeBtn } from "./components/LikeBtn/LikeBtn";
import { ChangingText } from "./components/ChangingText/ChangingText";
import { TemporaryMessage } from "./components/TemporaryMessage/TemporaryMessage";
import { ChangeableNumber } from "./components/ChangeableNumber/ChangeableNumber";

export const App = () => {
	return (
		<>
			<SimpleCounter />
			<ToggleButton />
			<TextBox />
			<ShowText />
			<ColoredBtn />
			<TaskList />
			<FakeNavigation btnName={"Inicio"} textContent={"Texto de Inicio"} />
			<FakeNavigation btnName={"Perfil"} textContent={"Texto de Perfil"} />
			<FakeNavigation btnName={"ajustes"} textContent={"Boton ajustes"} />
			<CheckBox />
			<ImageChanger />
			<LikeBtn />
			<ChangingText text={"Bienvenidos a los pilares de la tierra perdida"} />
			<TemporaryMessage />
			<ChangeableNumber originalNumber={7} />
		</>
	);
};
