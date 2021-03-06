import { React, Component } from "react";
import PropTypes from "prop-types";

export class AddItem extends Component {
	state = {
		title: ""
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: "" });
	};
	//e.target will give us whatever we type in
	//and set it to the value
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: "flex" }}>
				<input
					type="text"
					name="title"
					style={{ flex: "10", padding: "5px" }}
					placeholder="Add Todo ..."
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input
					type="submit"
					value="Submit"
					className="btn"
					style={{ flex: "1" }}
				/>
			</form>
		);
	}
}

export default AddItem;

// let input = document.getElementById("#search").value;
// input = input.toLowerCase();
