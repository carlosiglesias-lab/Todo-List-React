import React, { useState } from "react";
import Card from "./card";
const Home = () => {
	const [todos, setTodos] = useState(["Eat", "Drink", "Sleep"]);

	return (
		<div id="container">
			<h1 className="todo-header">To do List</h1>
			<input id="addToDo" type="text" placeholder="Add to do here" onKeyUp={(e) => {
				if (e.key == "Enter" && e.target.value.trim() != "" && todos.filter((item,i) => item == e.target.value)== ""){
					setTodos([...todos, e.target.value]);
					console.log(todos.filter(item => item == e.target.value));		
					//todos.filter(item => item == e.target.value)== "" ? console.log("vacio") : console.log("lleno");
					e.target.value = "";
				}
				
			}
			} />
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={index}>
							<span><i className="fa fa-trash" onClick={(e)=>{
								setTodos(todos.filter((e,i) => i !== index));								
							}}></i></span>{todo}
						</li>
					)
				})}
			</ul>
			<p>{todos.length > 0 ? todos.length+" tasks left" : "No tasks, add a task"} </p>
		</div>
	);
};

export default Home;
