import React, { useState } from "react";
import PasswordGenerate from "components/PasswordGenerate";

function UserInput(props) {
	const [minInput, setMinInput] = useState(1);
	const [maxInput, setMaxInput] = useState(1);
	const [startGen, setStartGen] = useState(false);

	return (
		<div>
			<form>
				<input
					type="number"
					placeholder="Minimum number"
					min="1"
					max="8"
					value={minInput}
					onChange={(e) => setMinInput(e.target.value)}
				/>{" "}
				<input
					type="number"
					placeholder="Maximum lenght"
					min="1"
					max="20"
					value={maxInput}
					onChange={(e) => setMaxInput(e.target.value)}
				/>{" "}
				<button type="button" onClick={() => setStartGen(true)}>
					Generate Password
				</button>
				{startGen && <PasswordGenerate minimum={minInput} maximum={maxInput} />}
			</form>
		</div>
	);
}

export default UserInput;
