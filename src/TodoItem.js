import React, { Component } from "react";
//fetch the current  item being passed in
export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: "gray",
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

	//needs to be wrapped
	render() {
		//destructing is great!
		const { id, title } = this.props.todo;
		//now we can replacce this.props.todo with nothing

		return (
			<div style={this.getStyle()}>
				<input
					type="checkbox"
					//we will have to bing to thxe props to use this 					onChange={this.checked.bind(this)}
					//cannot red props of undefined so we need to bind or
					//since we created a custom method for handeling we
					//need to bind it to componets/
					//the way around this bind is by creating methods within our props instead
					// onChange={this.checked.bind(this)}
					//if you use an arrow function you don't have to use bind this, you ccna just pass in the event

					//PASS UP ID FROM THIS ITEM
					// onChange={this.props.markComplete.bind(this, id)}
					onClick={this.props.markComplete.bind(this, id)}
					// onClick={this.props.markComplete.bind(this)}
				/>{" "}
				<p>{title}</p>
				{/* <p>{this.props.todo.id}</p> */}
			</div>
		);
	}
}

// const itemStyle = {
// 	backgroundColor :
// }

export default TodoItem;
