import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaDrumstickBite, FaPlus } from "react-icons/fa6";

export default function DietPage({ params }) {
	return (
		<div>
			<header>
				<Link href={"/diets"} className="mr-auto">
					<FaArrowLeft />
				</Link>
				<h1 className="mr-auto">Editar dieta</h1>
			</header>
			<main className="p-1">
				{/* title and author */}
				<div className="items-start bg-fallback-bg mb-3">
					<h2>Aumentar masa</h2>
					<span className="opacity-60">De: Lic. Andrés González</span>
				</div>
				{/* Objectives */}
				<div className="items-start bg-fallback-bg">
					<h3>Objetivos: </h3>
					<div className="badge badge-primary bg-secondary border-none mb-1">
						<span>Aumentar masa muscular</span>
					</div>
					<div className="badge badge-primary bg-secondary border-none">
						<span>Mantener grasa</span>
					</div>
				</div>
				{/* Specs */}
				<div className="items-start bg-fallback-bg">
					<h3>Preferencias: </h3>
					<div className="w-fit items-center justify-center bg-fallback-bg">
						<div className="rounded-full h-12 w-12 bg-accent">
							<FaDrumstickBite />
						</div>
						<span className="opacity-70 text-center">
							Alta en <br /> proteína
						</span>
					</div>
				</div>
				{/* Weekdays */}
				<div className="bg-fallback-bg flex-row justify-between px-3">
					<label className="flex flex-col items-center justify-center">
						<input
							type="radio"
							className="radio checked:bg-primary"
							name="weekday"
							id="monday"
						/>
						<span>L</span>
					</label>
					<label className="flex flex-col items-center justify-center">
						<input
							type="radio"
							className="radio checked:bg-primary"
							name="weekday"
							id="tuesday"
						/>
						<span>M</span>
					</label>
					<label className="flex flex-col items-center justify-center">
						<input
							type="radio"
							className="radio checked:bg-primary"
							name="weekday"
							id="wednesday"
						/>
						<span>X</span>
					</label>
					<label className="flex flex-col items-center justify-center">
						<input
							type="radio"
							className="radio checked:bg-primary"
							name="weekday"
							id="thursday"
						/>
						<span>J</span>
					</label>
					<label className="flex flex-col items-center justify-center">
						<input
							type="radio"
							className="radio checked:bg-primary"
							name="weekday"
							id="friday"
						/>
						<span>V</span>
					</label>
					<label className="flex flex-col items-center justify-center">
						<input
							type="radio"
							className="radio checked:bg-primary"
							name="weekday"
							id="saturday"
						/>
						<span>S</span>
					</label>
					<label className="flex flex-col items-center justify-center">
						<input
							type="radio"
							className="radio checked:bg-primary"
							name="weekday"
							id="sunday"
						/>
						<span>D</span>
					</label>
				</div>
				{/* meal cats */}
				<div>
					{/* breakfast card */}
					<div className="p-1 rounded-3xl">
						<h3 className="self-start text-text">Desayuno</h3>
						<ul>
							<li>
								<div>
									<FaPlus />
								</div>
								<span>Agregar un alimento</span>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</div>
	);
}
