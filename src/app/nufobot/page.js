import React from "react";
import {
	FaArrowLeft,
	FaRobot,
	FaDumbbell,
	FaAppleWhole,
	FaChartSimple,
	FaPaperPlane,
} from "react-icons/fa6";
import Link from "next/link";

export default function NufobotPage() {
	return (
		<div className="h-screen w-screen">
			{/* chat header */}
			<header className="flex-row justify-start py-4 border-b-2">
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
					<h1>NufoBot</h1>
					{/* status */}
					<div className="flex-row justify-start">
						{/* online dot */}
						<div className="rounded-full bg-green-500 p-1 h-1 w-1 mr-1"></div>
						<span className="text-green-500">En línea</span>
					</div>
				</div>
			</header>
			<main className="px-3 py-2 overflow-y-auto">
				{/* exercise presets */}
				<div>
					<FaDumbbell />
					<div>
						<button>
							<span>
								Estoy buscando una rutina de entrenamiento de fuerza
								personalizada
							</span>
						</button>
						<button>
							<span>
								Me estoy aburriendo con mi rutina actual, ¿puedes sugerirme
								algunos ejercicios nuevos para el día de hoy?
							</span>
						</button>
					</div>
				</div>
				{/* nutrition presets */}
				<div>
					<FaAppleWhole />
					<div>
						<button>
							<span>
								¿Qué debo comer antes de un entrenamiento matutino para tener
								energía?
							</span>
						</button>
						<button>
							<span>
								¿Puedes sugerir algunos refrigerios saludables para después del
								entrenamiento?
							</span>
						</button>
					</div>
				</div>
				{/* analysis presets */}
				<div>
					<FaChartSimple />
					<div>
						<button>
							<span>
								Por favor, dame un resumen de mi rendimiento de la semana pasada
								en términos de ejercicio y nutrición.
							</span>
						</button>
						<button>
							<span>
								¿Cómo fue mi progreso esta semana en comparación con la
								anterior?
							</span>
						</button>
					</div>
				</div>
			</main>
			{/* personalized input area */}
			<footer className="bg-transparent rounded-[3.5rem] px-3 pt-2 pb-8">
				<form className="flex-row rounded-[3.5rem] border-2 border-gray-300 relative py-2">
					<input
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
