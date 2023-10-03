"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaPlus, FaRobot } from "react-icons/fa6";
import Link from "next/link";
import SendMessageForm from "./SendMessageForm";

import Chat from "./Chat";
import axios from "axios";
const presetsData = [
	{
		id: 1,
		content:
			"Estoy buscando una rutina de entrenamiento de fuerza personalizada",
		category: "fitness",
	},
	{
		id: 2,
		content:
			"Me estoy aburriendo con mi rutina actual, ¿puedes sugerirme algunos ejercicios nuevos para el día de hoy?",
		category: "fitness",
	},
	{
		id: 3,
		content:
			"¿Qué debo comer antes de un entrenamiento matutino para tener energía?",
		category: "nutrition",
	},
	{
		id: 4,
		content:
			"¿Puedes sugerir algunos refrigerios saludables para después del entrenamiento?",
		category: "nutrition",
	},
	{
		id: 5,
		content:
			"Por favor, dame un resumen de mi rendimiento de la semana pasada en términos de ejercicio y nutrición.",
		category: "stats",
	},
	{
		id: 6,
		content:
			"¿Cómo fue mi progreso esta semana en comparación con la anterior?",
		category: "stats",
	},
];

export default function Drawer() {
	const [showPresets, setShowPresets] = useState(true);
	const [messages, setMessages] = useState([]);
	const [conversationId, setConversationId] = useState(0);
	const scrollDivRef = useRef();
	const createConversation = async () => {
		const res = await axios.post(
			"https://nufogy-api.fly.dev/nufobot/conversacion/",
			{
				user: 1,
			}
		);
		console.log(res.data);
	};
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"https://nufogy-api.fly.dev/nufobot/mensaje/"
			);

			// const filteredData = res.data.filter(msg => msg.conversation === conversationId )

			setMessages(res.data);
		};
		fetchData();
	}, []);
	return (
		<div className="drawer drawer-end">
			<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<div className="h-screen w-screen">
					{/* chat header */}
					<header className="border-b-2 border-accent">
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
						<div className="w-fit ml-auto">
							<button
								className="bg-transparent"
								onClick={() => createConversation()}
							>
								<FaPlus />
							</button>
						</div>
					</header>
					<main className="px-3 py-2 overflow-y-auto justify-start flex-1 bg-fallback-bg">
						<Chat
							presets={presetsData}
							showPresets={showPresets}
							messages={messages}
						/>
						<div ref={scrollDivRef}></div>
					</main>
					{/* personalized input area */}
					<footer className="bg-transparent rounded-[3.5rem] px-3 pt-2 pb-8">
						<SendMessageForm
							setShowPresets={setShowPresets}
							messages={messages}
							setMessages={setMessages}
							scrollRef={scrollDivRef}
						/>
					</footer>
				</div>
				<label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-4"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
