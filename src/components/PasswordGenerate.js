import React from "react";

function PasswordGenerate({ minimum, maximum }) {
	return (
		<div>
			<p>
				{minimum}
				{maximum}
			</p>
		</div>
	);
}

export default PasswordGenerate;
