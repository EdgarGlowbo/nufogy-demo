"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHouse, FaListCheck, FaNutritionix, FaRobot } from "react-icons/fa6";

export default function BottomTabs() {
	const pathname = usePathname();
	return (
		<div className="flex-row h-12 py-0.5">
			{/* Home Dashboard and feed */}
			<Link href={"/"} className="bottom-tab">
				<button>
					<FaHouse
						className={`${
							["/", "/feed"].includes(pathname) ? "text-secondary" : ""
						}`}
					/>
				</button>
			</Link>
			<Link href={"/diary"} className="bottom-tab">
				<button>
					<FaListCheck
						className={`${pathname === "/diary" ? "text-secondary" : ""}`}
					/>
				</button>
			</Link>
			<Link href={"/programs"} className="bottom-tab">
				<button>
					<FaNutritionix
						className={`${pathname === "/programs" ? "text-secondary" : ""}`}
					/>
				</button>
			</Link>
			{/* Nufobot */}
			<Link href={"/nufobot"} className="bottom-tab">
				<button>
					<FaRobot
						className={`${pathname === "/nufobot" ? "text-secondary" : ""}`}
					/>
				</button>
			</Link>
		</div>
	);
}
