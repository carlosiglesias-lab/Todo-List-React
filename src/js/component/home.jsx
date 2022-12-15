import React, { useEffect, useState } from "react";

const Home = () => {
	const [todos, setTodos] = useState([{ "label": "Loading Tasks", "done": false }]);

	useEffect(() => {
		getTodos();

	}, []);

	const getTodos = async () => {
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/carlos", { method: 'GET' });
		const data = await response.json();
		setTodos(data);
		console.log(data);
	}
	useEffect(() => {
		updateTodos();
	}, [todos]);
	
	const updateTodos = async () => {
		await fetch("https://assets.breatheco.de/apis/fake/todos/user/carlos",
			{
				method: 'PUT',
				body: JSON.stringify(todos),
				headers: {
					'Content-Type': 'application/json'
				}
			});
	}

	return (
		<div id="container">
			<h1 className="todo-header">To do List</h1>
			<input id="addToDo" type="text" placeholder="Add to do here" onKeyUp={(e) => {
				if (e.key == "Enter" && e.target.value.trim() != "" && todos.filter((item, i) => item.label == e.target.value) == "") {
					setTodos([...todos, { "label": e.target.value, "done": false }]);
					e.target.value = "";
				}
			}
			} />
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={index}>
							<span><i className="fa fa-trash" onClick={(e) => {
								setTodos(todos.filter((e, i) => i !== index));														
							}}></i></span>{todo.label}
						</li>
					)
				})}
			</ul>
			<p>{todos.length > 0 ? todos.length + " tasks left" : "No tasks, add a task"} </p>
		</div>
	);
};

export default Home;
