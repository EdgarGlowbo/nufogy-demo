import React from "react";
import { FaAppleWhole } from "react-icons/fa6";

export default function FoodEntry({ name, description }) {
	return (
		<label className="diary-entry">
			<input
				type="checkbox"
				name="food"
				id="0"
				className="checkbox checkbox-success checkbox-lg w-[2rem]"
			/>

			<FaAppleWhole className="min-w-[2rem]" />
			<div className="justify-start items-start">
				<div className="w-fit justify-start">
					{/* upper row */}
					<div className="items-start">
						<span>{name}</span>
					</div>
					{/* lower row */}
					<div className="items-start">
						<span className="opacity-70 ">{description}</span>
					</div>
				</div>
			</div>
		</label>
	);
}
