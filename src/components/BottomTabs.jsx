import Link from "next/link";
import React from "react";
import { FaHouse, FaListCheck, FaNutritionix, FaRobot } from "react-icons/fa6";

export default function BottomTabs() {
	return (
		<div className="flex-row">
			{/* Home Dashboard and feed */}
			<Link href={"/"} className="bottom-tab">
				<button>
					<FaHouse />
				</button>
			</Link>
			<Link href={"/"} className="bottom-tab">
				<button>
					<FaListCheck />
				</button>
			</Link>
			<Link href={"/"} className="bottom-tab">
				<button>
					<FaNutritionix />
				</button>
			</Link>
			{/* Nufobot */}
			<Link href={"/nufobot"} className="bottom-tab">
				<button>
					<FaRobot />
				</button>
			</Link>
		</div>
	);
}
