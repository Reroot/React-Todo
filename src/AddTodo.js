import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
	state = {
		title: ""
	};

	onSubmit = (e) => {
		//prevent from writing to a file
		e.preventDefault();
		//pass title up, becuase we are chaning it
		this.props.addTodo(this.state.title);
		//clear the fields
		this.setState({ title: "" });
		//up one level, to app.js as it's imbedded
	};
	//e.target will give us whatever we type in
	//and set it to the value
	//this is fine for one field, but it's beetter to yuse brackets
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	//make sure to pass in name
	//onChange = (e) => this.setState({ title: e.target.value });
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

// PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

export default AddTodo;
