import { useState } from "react";
import "./ColoredBtn.css";

export const ColoredBtn = () => {
	const [activedBtn, setActivedBtn] = useState(true);
	const handleBtnColor = () => setActivedBtn(!activedBtn);

	return (
		<>
			<button className={activedBtn ? "actived-colored-btn" : "colored-btn"} onClick={handleBtnColor}>
				Cambiar Color
			</button>
		</>
	);
};
