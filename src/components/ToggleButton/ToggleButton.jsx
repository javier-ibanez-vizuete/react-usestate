import { useState } from "react";
import "./ToggleButton.css";

export const ToggleButton = () => {
	const [toggle, setToggle] = useState(true);
	const switchButton = () => setToggle(!toggle);
	return (
		<div className="toggle-btn-container">
			<button className={toggle ? "actived-toggle-btn" : "toggle-btn"} onClick={switchButton}>
				{toggle ? "Encendido" : "Apagado"} {toggle ? "☀" : "🌛"}
			</button>
		</div>
	);
};
