import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

export default function SendMessageForm() {
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const formData = new FormData(e.target);
		const inputMsg = formData.get("inputMsg");

		const message = {
			"ai role": false,
			content: inputMsg,
			conversation: 1,
		};
		console.log(JSON.stringify(message));

		const res = await fetch(process.env.API_URL + "/nufobot/mensaje", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(message),
		});

		console.log(res.status);
		if (res.status === 201) {
			e.target.reset();
		}
	};
	return (
		<form
			id="inputForm"
			onSubmit={(e) => handleSubmit(e)}
			className="flex-row rounded-[3.5rem] border-2 border-accent bg-accent relative py-2"
		>
			<input
				type="text"
				name="inputMsg"
				placeholder="Escribe tu input personalizado"
				className="!h-full !w-full !pr-[2.25rem] !pl-2"
			/>
			{/* send button */}
			<button
				className="bg-transparent p-1 m-0 absolute right-[12px]"
				type="submit"
				disabled={isLoading}
			>
				<FaPaperPlane className="h-4 w-4" />
			</button>
		</form>
	);
}
