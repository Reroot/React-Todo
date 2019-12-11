import React, { Component } from "react";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
// import axios from "axios";

//rce
class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Steal A hamburger",
				completed: false
			},
			{
				id: 2,
				title: "Kill an Ant",
				completed: false
			},
			{
				id: 3,
				title: "Shoot A watergun at a man wearing a blue hat",
				completed: false
			}
		]
	};

	// Add Todo, pass in props from state, will add dynamically with id
	addTodo = (title) => {
		// console.log(title);
		//the spread op makes a new copy based on the old
		//we need to use it to add/ using the spead oparator to the end

		const newTodo = {
			//adding incrementally new ids
			id: this.state.todos.length + 1,
			title,
			completed: false
		};

		this.setState({ todos: [...this.state.todos, newTodo] });
		// axios
		// 	.post("https://jsonplaceholder.typicode.com/todos", {
		// 		title,
		// 		completed: false
		// 	})
		// 	.then((res) => {
		// 		res.data.id = uuid.v4();
		// 		this.setState({ todos: [...this.state.todos, res.data] });
		// 	});
	};

	// markComplete = (id) => {};
	//delete todo
	deleteTask = (id) => {
		console.log(id);
		//use filter, loop though based on a conition, return a new array
		this.setState({
			//copy everything by using spead oprator
			//then filter them base on, if any todo where any id is not equal

			todos: [...this.state.todos.filter((todo) => todo.id !== id)]
		});
	};
	//stike though flip boolean
	markComplete = (id) => {
		// working becuase we passed up
		//to acess our state ids we need to map through
		//we call this when we are going to change the state based on a response
		this.setState({
			todos: this.state.todos.map((todo, key = todo.id) => {
				if (todo.id === id) {
					//change the state of the to do as we go though the maop
					//when mark compete is called after a click
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	render() {
		return (
			<div>
				<div className="container">
					<Header />
					{/* //for adding items we are modifying the state so we need,
					the todos, and then to setState */}
					{
						//the passing up from addtodo, so we can use it here
					}{" "}
					<AddTodo addTodo={this.addTodo} />
					{/* <AddItem /> */}
					<Todos
						todos={this.state.todos}
						deleteTask={this.deleteTask}
						markComplete={this.markComplete.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default App;
