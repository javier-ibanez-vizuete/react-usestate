import { useState } from "react";
import "./ShowText.css";

export const ShowText = () => {
	const [handleButton, setHandleButton] = useState(true);
	const btnSwitcher = () => setHandleButton(!handleButton);

	return (
		<div className="show-text-container">
			<button onClick={btnSwitcher}>{handleButton ? "Ocultar Texto" : "Mostrar Texto"}</button>
			{handleButton && <p>Texto para Mostrar/Ocultar</p>}
		</div>
	);
};
