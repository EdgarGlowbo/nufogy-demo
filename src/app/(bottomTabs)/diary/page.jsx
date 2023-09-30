import React from "react";
import { FaAppleWhole, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function DiaryPage() {
	return (
		<div className="bg-fallback-bg flex-1">
			{/* Date Slider */}
			<header className="relative top-0 py-3 px-1">
				<FaArrowLeft />
				<h1>Hoy</h1>
				<FaArrowRight />
			</header>
			{/* No routine or diet selected */}
			<main className="bg-fallback-bg p-1 flex-1">
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

				<form>
					{/* food entry */}
					<ul className="menu">
						<li>
							<label>
								<input type="checkbox" name="food" id="0" />

								<FaAppleWhole />
								<div>
									{/* upper row */}
									<div className="flex-row">
										<span>Pechuga de pollo</span>
									</div>
									{/* lower row */}
									<div className="flex-row">
										<span className="opacity-70">250 gr.</span>
									</div>
								</div>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" name="exercise" id="0" />
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" name="biometric" id="0" />
							</label>
						</li>
					</ul>
				</form>
			</main>
			{/* Routine and Diet Checklist */}
		</div>
	);
}
