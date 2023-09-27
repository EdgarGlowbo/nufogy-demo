import React from "react";
import {
	FaHouse,
	FaListCheck,
	FaNutritionix,
	FaPlus,
	FaRobot,
} from "react-icons/fa6";

export default function BottomTabs() {
	return (
		<div className="flex-row fixed bottom-0">
			{/* Home Dashboard and feed */}
			<button className="bottom-tab">
				<FaHouse />
			</button>
			{/* Diary */}
			<button className="bottom-tab">
				<FaListCheck />
			</button>
			{/* Floating illusion
			<div className="p-2 fixed bottom-4 rounded-full bg-background"></div> */}

			{/* Programs */}
			<button className="bottom-tab">
				<FaNutritionix />
			</button>
			{/* Nufobot */}
			<button className="bottom-tab">
				<FaRobot />
			</button>
		</div>
	);
}
