"use client";
import React, { useEffect, useRef } from "react";
import { FaAppleWhole, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import FoodEntry from "./FoodEntry";
import ExerciseEntry from "./ExerciseEntry";
// import BiometricEntry from "./BiometricEntry";
import axios from "axios";
import { useLogs } from "../layout";

export default function DiaryPage() {
	const { logs, setLogs } = useLogs();

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"https://nufogy-api.fly.dev/registrar/ejercicio/"
			);

			setLogs(res.data);
		};
		fetchData();
	}, []);
	return (
		<div className="bg-fallback-bg flex-1">
			{/* Date Slider */}
			<header className="fixed top-0 py-3 px-1 z-[1]">
				<FaArrowLeft />
				<h1>Hoy</h1>
				<FaArrowRight />
			</header>
			{/* No routine or diet selected */}
			<main className="bg-fallback-bg p-1 flex-1 overflow-y-auto">
				{logs.lenght > 0 ? (
					<div className="rounded-xl p-2 flex-row">
						{/* <div className="bg-accent rounded-full p-1 h-16 w-16 mr-3 flex-grow"> */}
						<FaAppleWhole className="mr-3" />
						{/* </div> */}
						<div className="items-start">
							<h3>Ninguna rutina o dieta seleccionada</h3>
							<p className="text-sm">
								Crea una dieta o rutina para registrar tu progreso diario
								fácilmente. Presiona el botón "+" para añadir ejercicio,
								biométricas o alimentos.
							</p>
						</div>
					</div>
				) : (
					<form name="diaryForm">
						{/* food entry */}
						<ul className="bg-fallback-bg pt-16 pb-12 overflow-y-auto">
							{/* <li className="py-2 px-1 rounded-box bg-background mb-1">
								<FoodEntry
									name={"Pechuga de pollo hervida"}
									description={"250 gr."}
								/>
							</li> */}
							{logs.map((log) => {
								return (
									<li
										key={log.id}
										className="py-2 px-1 rounded-box bg-background mb-1"
									>
										<ExerciseEntry
											name={log.nombre}
											description={log.descripcion}
										/>
									</li>
								);
							})}

							{/* <li className="py-2 px-1 rounded-box bg-background mb-1">
								<BiometricEntry name={"Peso corporal"} value={"69.3 kg"} />
							</li> */}
						</ul>
					</form>
				)}
			</main>
			{/* Routine and Diet Checklist */}
		</div>
	);
}
