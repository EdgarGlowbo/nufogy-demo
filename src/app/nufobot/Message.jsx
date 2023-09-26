import React, { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa6";

export default function Message({ message, status }) {
	return (
		<div className={`chat ${status === "sent" ? "chat-end" : "chat-start"} `}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					{status === "sent" ? <FaUser /> : <FaRobot />}
				</div>
			</div>
			{
				<div
					className={`chat-bubble w-fit ${
						status === "received" ? "bg-secondary" : ""
					}`}
				>
					<p>{message}</p>
				</div>
			}
		</div>
	);
}
