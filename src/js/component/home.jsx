import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	// add into array -> concat
	// clear from array -> filter
	// update -> map

	return (
		<div className="container">
			<h1>
				<em>
					<bold>My Todo List:</bold>
				</em>
			</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							console.log("Enter was press");
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
							}
						}}
						placeholder="ToDo? "
					/>
				</li>
				{todos.map((t) => (
					<li style={{ display: "flex", justifyContent: "space-between" }}>
						{t}
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" onClick={() => setTodos (todos.filter ((t, currentIndex) => index != currentIndex))}/>
</svg>
					</li>
				))}
				<div>
					<bold>
						<em>23 tasks</em>
					</bold>
				</div>
			</ul>
		</div>
	);
};

export default Home;
