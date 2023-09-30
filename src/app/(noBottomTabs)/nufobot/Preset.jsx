import React from "react";

export default function Preset({ content }) {
	return (
		<button
			type="submit"
			form="inputForm"
			className="bg-accent"
			value={content}
		>
			<span>{content}</span>
		</button>
	);
}
