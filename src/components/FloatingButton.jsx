import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function FloatingButton() {
	return (
		<button className="bottom-tab fixed bottom-4 bg-primary border-none rounded-full cursor-pointer z-[1] h-12 w-12 left-[50%] -translate-x-1/2">
			<FaPlus className="text-accent" />
		</button>
	);
}
