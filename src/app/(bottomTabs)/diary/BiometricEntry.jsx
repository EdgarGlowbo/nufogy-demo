import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

export default function BiometricEntry({ name, value }) {
	return (
		<label className="diary-entry">
			<input
				type="checkbox"
				name="food"
				id="0"
				className="checkbox checkbox-success checkbox-lg w-[2rem]"
			/>

			<FaHeartPulse className="min-w-[2rem]" />
			<div className="justify-start flex-row flex-1">
				<div className="w-fit justify-start">
					{/* upper row */}
					<div className="items-start">
						<span>{name}</span>
					</div>
				</div>
				<div className="w-fit ml-auto mr-1">
					<span className="text-xl">{value}</span>
				</div>
			</div>
		</label>
	);
}
