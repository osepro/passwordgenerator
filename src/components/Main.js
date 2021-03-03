import React, { Component } from "react";
import UserInput from "components/UserInput";

class Main extends Component {
	render() {
		return (
			<div>
				<h1>Password Generator</h1>
				<UserInput />
			</div>
		);
	}
}

export default Main;
