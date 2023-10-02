import React from "react";
import { FaRobot } from "react-icons/fa6";

export default function Loading() {
	return (
		<div className="h-screen w-screen">
			<FaRobot className="h-12 w-12 mb-4" />
			<span className="loading loading-spinner text-primary"></span>
		</div>
	);
}
