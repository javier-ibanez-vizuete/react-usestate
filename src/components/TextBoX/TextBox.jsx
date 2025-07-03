import { useState } from "react";
import "./TextBox.css";

export const TextBox = () => {
	const [text, setText] = useState("Placeholder");

	return (
		<div className="textbox-container">
			<input
				type="text"
				name="input-textbox"
				id="input-textbox"
                placeholder="Escribe lo que quieras"
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			<p>{text}</p>
		</div>
	);
};
