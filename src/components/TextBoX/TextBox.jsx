import { useState } from "react";
import "./TextBox.css";

export const TextBox = () => {
	const [texto, setTexto] = useState("Placeholder");

	return (
		<div className="textbox-container">
			<input
				type="text"
				name="input-textbox"
				id="input-textbox"
                placeholder="Escribe lo que quieras"
				onChange={(event) => {
					setTexto(event.target.value);
				}}
			/>
			<p>{texto}</p>
		</div>
	);
};
