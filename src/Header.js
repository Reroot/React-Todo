import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
	const headerStyle = {
		backround: "#693090",
		text: "white"
	};
	return (
		<div style={headerStyle}>
			<h2>Make your little Dreams come true, one tick at a time</h2>
			{/* //this is router syntax a tag aren't used instead use LINK */}
			<Link to="/"> Home </Link> | <Link to="/about"> About </Link>
		</div>
	);
}
