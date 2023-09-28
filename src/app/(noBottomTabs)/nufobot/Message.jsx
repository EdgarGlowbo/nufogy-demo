import React, { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa6";

export default function Message({ message, role }) {
	return (
		<div className={`chat ${role === "user" ? "chat-end" : "chat-start"} `}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					{role === "user" ? <FaUser /> : <FaRobot />}
				</div>
			</div>
			{
				<div
					className={`chat-bubble w-fit ${
						role === "system" ? "bg-secondary" : ""
					}`}
				>
					<p>{message}</p>
				</div>
			}
		</div>
	);
}
