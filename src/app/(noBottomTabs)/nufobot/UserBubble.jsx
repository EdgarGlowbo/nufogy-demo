import React from "react";
import { FaUser } from "react-icons/fa6";

export default function UserBubble({ content }) {
	return (
		<div className="chat chat-end bg-fallback-bg">
			<div className="chat-image avatar bg-fallback-bg">
				<div className="w-10 rounded-full bg-fallback-bg">
					<FaUser />
				</div>
			</div>
			<div className="chat-bubble w-fit bg-accent">
				<p>{content}</p>
			</div>
		</div>
	);
}
