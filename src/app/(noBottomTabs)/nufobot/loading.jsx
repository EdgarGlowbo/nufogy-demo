import React from "react";
import { FaRobot } from "react-icons/fa6";

export default function Loading() {
	return (
		<div>
			<FaRobot className="h-12 w-12" />
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
		</div>
	);
}
