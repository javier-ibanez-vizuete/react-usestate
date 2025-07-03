import { useState } from "react";
import "./CheckBox.css";

export const CheckBox = () => {
	const [checkbox, setCheckBox] = useState(false);

	return (
		<div className="checkbox-container">
			<input
				type="checkbox"
				name="input-checkbox"
				id="input-checkbox"
				onClick={(event) => {
					event.target.value = checkbox;
					setCheckBox(!checkbox);
				}}
			/>
			<p>{checkbox ? "Aceptado" : "No aceptado"}</p>
		</div>
	);
};
