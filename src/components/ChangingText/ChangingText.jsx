import { useState } from "react";
import "./ChangingText.css";

export const ChangingText = ({ text }) => {
	const [editabletext, setEditableText] = useState(text);
	const [showInput, setShowInput] = useState(false);
	const handleShowInput = () => setShowInput(!showInput);
	// He utilizado un text area porque me parece mas normal en el caso de que el texto sea demasiado grande
	return (
		<div className="changing-text-container">
			<h2 onClick={handleShowInput}>{editabletext}</h2>
			{showInput && (
				<textarea
					value={editabletext}
					onChange={(event) => {
						setEditableText(event.target.value);
					}}
				/>
			)}
		</div>
	);
};
