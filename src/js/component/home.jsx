import React, { useState } from "react";
import Card from "./card";
const Home = () => {
	const [todos, setTodos] = useState(["Eat", "Drink", "Sleep"]);

	return (
		<div id="container">
			<h1 className="todo-header">To do List</h1>
			<input id="addToDo" type="text" placeholder="Add to do here" onKeyUp={(e) => {
				if (e.key == "Enter"){
					setTodos([...todos, e.target.value]);
					e.target.value = "";
				}
			}
			} />
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={index}>
							<span><i className="fa fa-trash" onClick={(e)=>{
								setTodos(todos.filter(item => item !== todo));								
							}}></i></span>{todo}
						</li>
					)
				})}
			</ul>
			<p>{todos.length} Items left</p>
		</div>
	);
};

export default Home;
