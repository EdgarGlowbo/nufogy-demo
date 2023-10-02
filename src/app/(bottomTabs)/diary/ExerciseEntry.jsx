import React from "react";
import { FaDumbbell } from "react-icons/fa6";

export default function ExerciseEntry({ name, description }) {
	return (
		<label className="diary-entry">
			<input
				type="checkbox"
				name="exercise"
				id="1"
				className="checkbox checkbox-success checkbox-lg w-[2rem]"
			/>

			<FaDumbbell className="min-w-[2rem]" />
			<div className="justify-start items-start w-[75%]">
				<div className="w-fit justify-start">
					{/* upper row */}
					<div className="items-start ">
						<span className="overflow-auto">{name}</span>
					</div>
					{/* lower row */}
					<div className="items-start">
						<span className="opacity-70 overflow-auto">{description}</span>
					</div>
				</div>
			</div>
			{/* reps and weight */}
			{/* <div className="w-[25%]">
				<div className="flex-row mb-0.5">
					<div className="flex-1 self-center items-end mr-1 ">
						<span className="text-xs">Reps: </span>
					</div>
					<input
						type="number"
						name="reps"
						min={1}
						step={1}
						defaultValue={1}
						className="w-8 rounded-3xl p-0.5 "
					/>
				</div>
				<div className="flex-row">
					<div className="flex-1 self-center items-end mr-1">
						<span className="text-xs ">lb: </span>
					</div>
					<input
						type="number"
						name="weight"
						step={2.5}
						min={2.5}
						defaultValue={2.5}
						className="w-8 rounded-3xl p-0.5 "
					/>
				</div>
			</div> */}
		</label>
	);
}
