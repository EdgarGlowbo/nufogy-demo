"use client";
import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import axios from "axios";

export default function SendMessageForm({
	setShowPresets,
	messages,
	setMessages,
	scrollRef,
	conversationId,
}) {
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setShowPresets(false);

		const formData = new FormData(e.target);
		const inputMsg = formData.get("inputMsg");

		const message = {
			ai_role: false,
			content: inputMsg,
			conversation: conversationId,
		};
		// const newMessages = [...messages];
		// newMessages.push(message);
		// setMessages(newMessages);
		// console.log(newMessages);
		scrollRef.current.scrollIntoView({ behavior: "smooth" });
		const res = await axios.post(
			"https://nufogy-api.fly.dev/nufobot/mensaje/",
			message
		);

		if (res.status === 200) {
			e.target.reset();
			const filteredData = res.data.filter(
				(msg) => msg["conversacion id"] === conversationId
			);

			setMessages(filteredData);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		scrollRef.current.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	return (
		<form
			id="inputForm"
			autoComplete="off"
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
