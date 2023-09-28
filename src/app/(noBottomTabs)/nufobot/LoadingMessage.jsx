import React from "react";

export default function LoadingMessage() {
	return (
		<div className="chat-bubble bg-secondary w-fit flex flex-row">
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
		</div>
	);
}
