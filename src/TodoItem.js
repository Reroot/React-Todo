import React, { Component } from "react";
//fetch the current item being passed in
export class TodoItem extends Component {
	//needs to be wrapped
	render() {
		return (
			<div>
				<p>{this.props.todo.id}</p>
				<p>{this.props.todo.title}</p>
			</div>
		);
	}
}

export default TodoItem;
