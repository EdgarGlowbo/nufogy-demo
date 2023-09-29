import React from "react";
import Link from "next/link";
import {
	FaArrowLeft,
	FaCaretRight,
	FaDumbbell,
	FaUtensils,
} from "react-icons/fa6";

export default function ProgramsPage() {
	return (
		<div className="bg-fallback-bg">
			<header>
				<h1>Programas</h1>
			</header>
			<main className="p-1 bg-fallback-bg">
				{/* Dietas card */}
				<div className="p-1 rounded-2xl mb-2">
					<Link href={"diets"} className="w-full">
						<div className="flex-row px-1">
							<div className="flex-row">
								<FaUtensils />
								<div>
									<h3>Dieta</h3>
									<span>3 dieta(s)</span>
								</div>
							</div>
							<FaCaretRight />
						</div>
					</Link>
					<div className="items-start">
						<button className="bg-secondary">
							<span>Crear dieta</span>
						</button>
					</div>
				</div>
				{/* Rutinas card */}
				<div className="p-1 rounded-2xl">
					<Link href={"routines"} className="w-full">
						<div className="flex-row px-1">
							<div className="flex-row">
								<FaDumbbell />
								<div>
									<h3>Rutinas</h3>
									<span>1 rutina(s)</span>
								</div>
							</div>
							<FaCaretRight />
						</div>
					</Link>
					<div className="items-start">
						<button className="bg-secondary">
							<span>Crear rutina</span>
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
