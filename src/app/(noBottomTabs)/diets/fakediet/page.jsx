import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaDrumstickBite, FaPlus } from "react-icons/fa6";
import WeekdayGroup from "@/components/WeekdayGroup";

export default function DietPage() {
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
				<div className="my-2 bg-fallback-bg">
					<WeekdayGroup />
				</div>

				{/* meal cats */}
				<div>
					{/* breakfast card */}
					<div className="p-1 rounded-3xl">
						<h3 className="self-start text-text">Desayuno</h3>
						<ul className="menu">
							<li className="flex flex-row">
								<div className="w-fit">
									<FaPlus className=" h-6 w-6" />
								</div>
								<span>Agregar un alimento</span>
							</li>
						</ul>
					</div>
					{/* lunch card */}
					<div className="p-1 rounded-3xl">
						<h3 className="self-start text-text">Comida</h3>
						<ul className="menu">
							<li className="flex flex-row">
								<div className="w-fit">
									<FaPlus className=" h-6 w-6" />
								</div>
								<span>Agregar un alimento</span>
							</li>
						</ul>
					</div>
					{/* dinner card */}
					<div className="p-1 rounded-3xl">
						<h3 className="self-start text-text">Cena</h3>
						<ul className="menu">
							<li className="flex flex-row">
								<div className="w-fit">
									<FaPlus className=" h-6 w-6" />
								</div>
								<span>Agregar un alimento</span>
							</li>
						</ul>
					</div>
					{/* snacks card */}
					<div className="p-1 rounded-3xl">
						<h3 className="self-start text-text">Snacks</h3>
						<ul className="menu">
							<li className="flex flex-row">
								<div className="w-fit">
									<FaPlus className=" h-6 w-6" />
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
