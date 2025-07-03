import { useState } from "react";
import "./TemporaryMessage.css";

export const TemporaryMessage = () => {
	const [showMessage, setShowMessage] = useState(false);
	const switchShow = () => {
		setShowMessage(!showMessage);
		setTimeout(() => {
			setShowMessage(false);
		}, 3000);
	};
	return (
		<div className="temporary-message-container">
			<button onClick={switchShow}>Mostrar Mensaje</button>
            {showMessage && <p>Mensaje random</p>}
		</div>
	);
};
