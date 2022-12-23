import React, { useEffect, useState } from "react";

const Home = () => {
	const [todos, setTodos] = useState([{ "label": "Loading Tasks", "done": false }]);
	const [users,setUsers] = useState([]);
	const [currentUser,setCurrentUser] = useState("carlos")

	useEffect(() => {
		getUsers();
		//getTodos();

	}, []);

	const getTodos = async () => {
		console.log(currentUser);	
		const url = "https://assets.breatheco.de/apis/fake/todos/user/"+currentUser;
		console.log(url);
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/"+currentUser, { method: 'GET' });
		const data = await response.json();
		setTodos(data);
		
	}
	const getUsers = async () => {
		const responseU = await fetch("https://assets.breatheco.de/apis/fake/todos/user", { method: 'GET' });
		const dataU = await responseU.json();
		setUsers(dataU);
		console.log(dataU);
	}
	const userChange = event => {		
		setCurrentUser(event.target.value);
	  };
	useEffect(() => {
		updateTodos();
	}, [todos]);
	useEffect(() => {
		getTodos();
	}, [currentUser]);
	
	const updateTodos = async () => {
		await fetch("https://assets.breatheco.de/apis/fake/todos/user/"+currentUser,
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
			<select className="form-select"value={currentUser} onChange={userChange}>
				{users.map((user,index) => {
					return(
						<option key={index} value={user}>{user}</option>
					)
				})}
				</select>
				<h2>Todo's for {currentUser}</h2> 
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
