import React, { Component } from "react";
import ToDoItem, { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";
//todos is the name of our state, comes from the name we passed from app.js
class Todos extends Component {
	render() {
		//app level state is shared
		// return this.props.todos.map((todo) => <h2>{todo.title}</h2>);
		//MAP through each todo

		return this.props.todos.map((todo) => (
			<h3>
				{/* keys should be the id prop usually */}
				<ToDoItem key={todo.id} todo={todo} markComplete={this.markComplete} />
			</h3>
		));
	}
}
//obj of props, should be the name of the class instead of default
TodoItem.propTypes = {
	todo: PropTypes.array.isRequired
};

export default Todos;
