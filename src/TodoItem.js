import React, { Component } from "react";
//fetch the current  item being passed in
export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: "#f4f4f4",
			textDecoration: this.props.todo.completed ? "line-through" : "none"
		};
	};
	//take in an on change event, this is undefined, needs to be bnound
	//we need to componet drill, to get state we need to do find the value though the componets
	//without redux or hooks
	//we would need to go from todoitem=>todos=>app.js, just to modify the state
	//we need to create method though out props instead
	//This is CALLED PASSING COMPONETS UPWARD, becase we need to modify the state from here
	//need to call this.props.checked, and this needs to be replicated in each componet we are
	//goign up in
	checked = (e) => {
		console.log(this.props);
	};

	//needs to be wrapped
	render() {
		return (
			<div style={this.getStyle()}>
				<input type="checkbox" onChange={this.checked} />{" "}
				<p>{this.props.todo.title}</p>
			</div>
		);
	}
}

// const itemStyle = {
// 	backgroundColor :
// }

export default TodoItem;
