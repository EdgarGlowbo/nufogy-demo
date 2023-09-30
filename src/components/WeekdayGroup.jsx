"use client";
import React, { useEffect, useRef } from "react";

const trackCheckedItem = (refs) => {
	refs.current.forEach((label) => {
		if (label) {
			label.classList.remove("bg-primary");

			const radio = label.querySelector("input");

			if (radio.checked) {
				label.classList.add("bg-primary");
			}
		}
	});
};

export default function WeekdayGroup() {
	const refs = useRef([]);
	const weekdays = [
		{
			id: 0,
			name: "Domingo",
			shorthand: "D",
		},
		{
			id: 1,
			name: "Lunes",
			shorthand: "L",
		},
		{
			id: 2,
			name: "Martes",
			shorthand: "M",
		},
		{
			id: 3,
			name: "Miércoles",
			shorthand: "X",
		},
		{
			id: 4,
			name: "Jueves",
			shorthand: "J",
		},
		{
			id: 5,
			name: "Viernes",
			shorthand: "V",
		},
		{
			id: 6,
			name: "Sábado",
			shorthand: "S",
		},
	];
	useEffect(() => {
		// first el default checked
		trackCheckedItem(refs);
	}, []);
	return (
		<div className="btn-group bg-fallback-bg flex-row justify-between px-3 w-fit">
			{weekdays.map((weekday) => (
				<label
					key={weekday.id}
					ref={(el) => refs.current.push(el)}
					className="btn flex flex-col items-center justify-center"
				>
					<input
						type="radio"
						name="weekday"
						className="hidden"
						defaultChecked={weekday.id === 0}
						id={weekday.id}
						onChange={() => trackCheckedItem(refs)}
					/>
					<span>{weekday.shorthand}</span>
				</label>
			))}
		</div>
	);
}
