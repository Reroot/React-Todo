import React from "react";

export default function About() {
	//if you don't need a div, you can use a fragment
	//Doesn't show anything, but needed for JSX
	return (
		<React.Fragment>
			<h3>
				{" "}
				About: This is a simple react todoList that will get more complex
				Version: 1.0.0
			</h3>
		</React.Fragment>
	);
}
