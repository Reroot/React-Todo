import React, { Component } from "react";
//todos is the name of our state, comes from the name we passed from app.js
class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => <h2>{todo.title}</h2>);
	}
}

export default Todos;
