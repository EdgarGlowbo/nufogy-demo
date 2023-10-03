"use client";
import React, { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { useLogs } from "@/app/(bottomTabs)/layout";

export default function ExerciseEntryForm() {
	const [isLoading, setIsLoading] = useState(false);
	const { logs, setLogs } = useLogs();
	const modalRef = useRef();
	const logExercise = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		if (modalRef) {
			const formData = new FormData(e.target);
			const name = formData.get("name");
			const desc = formData.get("desc");
			const exerciseLog = {
				nombre: name,
				descripcion: desc,
			};

			const res = await axios.post(
				"https://nufogy-api.fly.dev/registrar/ejercicio/",
				exerciseLog
			);

			if (res.status === 200) {
				e.target.reset();
				const newLogs = [...logs];
				newLogs.push(res.data);
				setLogs(newLogs);
				document
					.querySelector("#diaryBottom")
					.scrollIntoView({ behavior: "smooth" });
				setIsLoading(false);
			}
		}
	};
	return (
		<>
			<dialog id="DiaryEntryForm" ref={modalRef} className="modal">
				<div className="modal-box bg-background relative">
					<button
						className="absolute top-0 right-0 m-2 bg-transparent"
						onClick={() => {
							modalRef.current.close();
						}}
					>
						<FaXmark className="h-6 w-6 !text-text" />
					</button>
					<h3 className="font-bold text-lg">Registrar ejercicio</h3>

					<form
						onSubmit={(e) => logExercise(e)}
						autoComplete="off"
						id="logExerciseForm"
					>
						<div className="form-control w-full max-w-xs">
							<label className="label flex-col text-text">
								<span className="label-text self-start text-text opacity-80">
									Nombre del ejercicio
								</span>

								<input
									type="text"
									name="name"
									placeholder="ej. Remo con barra"
									className="!input !input-bordered !w-full !max-w-xs !text-background"
								/>
							</label>
							<label className="label flex-col text-text">
								<span className="label-text self-start text-text opacity-80">
									Descripción
								</span>

								<input
									type="text"
									name="desc"
									placeholder="ej. 1er set, 12 reps con 45 lb por lado"
									className="!input !input-bordered !w-full !max-w-xs !text-background"
								/>
							</label>
						</div>
					</form>

					<div className="modal-action">
						<button
							className="btn m-0 w-full h-full bg-accent text-background border-none"
							type="submit"
							form="logExerciseForm"
							disabled={isLoading}
						>
							Guardar
						</button>
					</div>
				</div>
			</dialog>
		</>
	);
}
