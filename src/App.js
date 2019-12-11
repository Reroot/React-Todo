import React, { Component } from "react";
// import "./App.css";
import Todos from "./Todos";
import Header from "./Header";
import AddItem from "./AddItem";
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

	// markComplete = (id) => {};

	deleteTask = (id) => {
		console.log("delete from app.js tower");
	};

	markComplete = () => {
		console.log("from app js");
	};

	render() {
		return (
			<div>
				<div>
					<Header />
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
