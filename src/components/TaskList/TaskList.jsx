import { useState } from "react";
import "./TaskList.css";

export const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [text, setText] = useState("");
	const handleArrayText = () => {
		if (text.length) {
			setTasks([...tasks, text]);
			setText("");
		}
	};
	return (
		<form className="task-list-container" onSubmit={(event) => event.preventDefault()}>
			<input
				type="text"
				name="input-task-list"
				id="input-task-list"
				value={text}
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			<button onClick={handleArrayText}>Añadir Tarea</button>
			{tasks.length > 0 && (
				<ul>
					{tasks.map((task, index) => (
						<li key={index}>{task}</li>
					))}
				</ul>
			)}
		</form>
	);
};
