import { useState } from "react";
import "./SimpleCounter.css";

export const SimpleCounter = () => {
	const [counter, setCounter] = useState(0);
	const increaseCounter = () => setCounter(counter + 1);
	const decreaseCounter = () => setCounter(counter - 1);
	const resetCounter = () => setCounter(0);

	return (
		<div className="simple-counter-container">
			<h1>{counter}</h1>
			<button onClick={increaseCounter}>Sumar</button>
			<button onClick={decreaseCounter}>Restar</button>
			<button onClick={resetCounter}>Reiniciar</button>
		</div>
	);
};
