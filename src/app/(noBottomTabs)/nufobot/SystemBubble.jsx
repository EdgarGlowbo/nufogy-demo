import React from "react";
import { FaRobot } from "react-icons/fa6";

export default function SystemBubble({ content }) {
	return (
		<div className="chat chat-start bg-fallback-bg">
			<div className="chat-image avatar bg-fallback-bg">
				<div className="w-10 rounded-full bg-fallback-bg">
					<FaRobot />
				</div>
			</div>
			<div className="chat-bubble bg-secondary w-fit">
				<p>{content}</p>
			</div>
		</div>
	);
}
