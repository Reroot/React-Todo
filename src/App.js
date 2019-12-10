import React, { Component } from "react";
// import "./App.css";
import Todos from "./Todos";

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

	render() {
		return (
			<div>
				<Todos todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
