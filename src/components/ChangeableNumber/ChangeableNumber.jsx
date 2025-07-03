import { useState } from "react";
import "./ChangeableNumber.css";

export const ChangeableNumber = ({ originalNumber }) => {
	const [number, setNumber] = useState(originalNumber);
	const increaseNumber = () => setNumber(number + 1);
	const decreaseNumber = () => setNumber(number - 1);
	return (
		<div className="changeable-number-container">
			<h2>{number}</h2>
			<div className="changeable-number-btns-container">
				<button onClick={increaseNumber}>Añadir 1</button>
				<button onClick={decreaseNumber}>Restar 1</button>
			</div>
		</div>
	);
};
