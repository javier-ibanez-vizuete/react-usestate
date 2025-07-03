import { useState } from "react";
import "./FakeNavigation.css";

export const FakeNavigation = ({btnName, textContent}) => {
	const [handleBtn, setHandleBtn] = useState(false);
	const toggleText = () => setHandleBtn(!handleBtn);

    if (!btnName.length) {
        return null;
    }
	return (
		<div className="fake-navigation-container">
			<div className="fake-nav-btns-container">
				<button onClick={toggleText}>{btnName}</button>
			</div>
			{handleBtn && <p>{textContent ? textContent : "Boton sin contenido"}</p>}
		</div>
	);
};
