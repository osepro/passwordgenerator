import React from "react";

function PasswordGenerate({ minimum, maximum }) {
	function makepassword(length) {
		let result = "";
		let characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&#@_-%^!";
		let charactersLength = characters.length;

		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	const generatedPassword = makepassword(maximum).toUpperCase();

	return (
		<div>
			<p className="passworddisplay">{generatedPassword}</p>
		</div>
	);
}

export default PasswordGenerate;
