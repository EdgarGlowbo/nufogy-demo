"use client";

import React, { useRef, useState } from "react";
import {
	FaArrowLeft,
	FaRobot,
	FaDumbbell,
	FaAppleWhole,
	FaChartSimple,
	FaPaperPlane,
	FaUser,
} from "react-icons/fa6";
import Link from "next/link";

export default function NufobotPage() {
	const [showPresets, setShowPresets] = useState(true);
	const promptInput = useRef(null);
	// Post request called on submit
	const sendMessage = async () => {
		const res = await fetch("https://nufogy-server.fly.dev/nufobot/mensaje/");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowPresets(false);
		if (promptInput.current) {
			const inputValue = promptInput.current.value;
		}

		e.target.reset();
	};
	return (
		<div className="h-screen w-screen">
			{/* chat header */}
			<header className="py-4 border-b-2 border-accent">
				{/* go back btn */}
				<Link href="/">
					<button className="p-2 bg-transparent">
						<FaArrowLeft className="h-5 w-5" />
					</button>
				</Link>
				{/* bot icon */}
				<div className="w-fit p-2 ">
					<FaRobot />
				</div>
				{/* contact info and status */}
				<div className="w-fit justify-start">
					<h1 className="font-nufogy-typo">NufoBot</h1>
					{/* status */}
					<div className="flex-row justify-start">
						{/* online dot */}
						<div className="rounded-full bg-success p-1 h-1 w-1 mr-1"></div>
						<span className="text-success">En línea</span>
					</div>
				</div>
			</header>
			<main className="px-3 py-2 overflow-y-auto justify-start flex-1 bg-fallback-bg">
				{showPresets ? (
					<>
						<div className="bg-fallback-bg">
							<FaDumbbell />
							<div className="bg-fallback-bg">
								<button
									type="submit"
									form="inputForm"
									className="bg-accent"
									value={
										"Estoy buscando una rutina de entrenamiento de fuerza personalizada"
									}
								>
									<span>
										Estoy buscando una rutina de entrenamiento de fuerza
										personalizada
									</span>
								</button>
								<button
									type="submit"
									form="inputForm"
									className="bg-accent"
									value={
										"Me estoy aburriendo con mi rutina actual, ¿puedes sugerirme algunos ejercicios nuevos para el día de hoy?"
									}
								>
									<span>
										Me estoy aburriendo con mi rutina actual, ¿puedes sugerirme
										algunos ejercicios nuevos para el día de hoy?
									</span>
								</button>
							</div>
						</div>

						<div className="bg-fallback-bg">
							<FaAppleWhole />
							<div className="bg-fallback-bg">
								<button type="submit" form="inputForm" className="bg-accent">
									<span>
										¿Qué debo comer antes de un entrenamiento matutino para
										tener energía?
									</span>
								</button>
								<button type="submit" form="inputForm" className="bg-accent">
									<span>
										¿Puedes sugerir algunos refrigerios saludables para después
										del entrenamiento?
									</span>
								</button>
							</div>
						</div>

						<div className="bg-fallback-bg">
							<FaChartSimple />
							<div className="bg-fallback-bg">
								<button type="submit" form="inputForm" className="bg-accent">
									<span>
										Por favor, dame un resumen de mi rendimiento de la semana
										pasada en términos de ejercicio y nutrición.
									</span>
								</button>
								<button type="submit" form="inputForm" className="bg-accent">
									<span>
										¿Cómo fue mi progreso esta semana en comparación con la
										anterior?
									</span>
								</button>
							</div>
						</div>
					</>
				) : (
					<>
						{/* Chat bubbles samples */}
						{/* User */}
						<div className="chat chat-end bg-fallback-bg">
							<div className="chat-image avatar bg-fallback-bg">
								<div className="w-10 rounded-full bg-fallback-bg">
									<FaUser />
								</div>
							</div>
							<div className="chat-bubble w-fit bg-accent">
								<p>
									Estoy buscando una rutina de entrenamiento de fuerza
									personalizada
								</p>
							</div>
						</div>
						{/* Nufobot */}
						<div className="chat chat-start bg-fallback-bg">
							<div className="chat-image avatar bg-fallback-bg">
								<div className="w-10 rounded-full bg-fallback-bg">
									<FaRobot />
								</div>
							</div>
							<div className="chat-bubble bg-secondary w-fit">
								<p>
									Día 1: Parte Superior del Cuerpo <br />
									Día 2: Descanso o Actividad de Baja
									<br />
									Día 3: Piernas
									<br />
									Día 4: Descanso o Actividad de Baja Intensidad
									<br />
									Día 5: Parte Superior del Cuerpo ¡Buena suerte con tu rutina
									de entrenamiento!
									<br />
									Siempre es recomendable consultar a un profesional de la salud
									o entrenador personal antes de iniciar un nuevo programa de
									ejercicios.
								</p>
							</div>
						</div>

						{/* {Nufobot writting} */}
						<div className="chat chat-start bg-fallback-bg">
							<div className="chat-image avatar bg-fallback-bg">
								<div className="w-10 rounded-full bg-fallback-bg">
									<FaRobot />
								</div>
							</div>
							<div className="chat-bubble bg-secondary w-fit flex flex-row">
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
							</div>
						</div>
					</>
				)}
			</main>
			{/* personalized input area */}
			<footer className="bg-transparent rounded-[3.5rem] px-3 pt-2 pb-8">
				<form
					id="inputForm"
					onSubmit={(e) => handleSubmit(e)}
					className="flex-row rounded-[3.5rem] border-2 border-accent bg-accent relative py-2"
				>
					<input
						ref={promptInput}
						type="text"
						placeholder="Escribe tu input personalizado"
						className="!h-full !w-full !pr-[2.25rem] !pl-2"
					/>
					{/* send button */}
					<button
						className="bg-transparent p-1 m-0 absolute right-[12px]"
						type="submit"
					>
						<FaPaperPlane className="h-4 w-4" />
					</button>
				</form>
			</footer>
		</div>
	);
}
