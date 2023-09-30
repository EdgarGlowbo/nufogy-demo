"use client";
import React from "react";
import { FaDumbbell, FaAppleWhole, FaChartSimple } from "react-icons/fa6";
import UserBubble from "./UserBubble";
import SystemBubble from "./SystemBubble";
import Preset from "./Preset";

export default function Chat({ presets, showPresets, messages }) {
	return (
		<>
			{showPresets && messages.length === 0 ? (
				<>
					<div className="bg-fallback-bg">
						<FaDumbbell />
						<div className="bg-fallback-bg">
							{presets
								.filter((preset) => preset.category === "fitness")
								.map((preset) => (
									<Preset key={preset.id} content={preset.content} />
								))}
						</div>
					</div>

					<div className="bg-fallback-bg">
						<FaAppleWhole />
						<div className="bg-fallback-bg">
							{presets
								.filter((preset) => preset.category === "nutrition")
								.map((preset) => (
									<Preset key={preset.id} content={preset.content} />
								))}
						</div>
					</div>

					<div className="bg-fallback-bg">
						<FaChartSimple />
						<div className="bg-fallback-bg">
							{presets
								.filter((preset) => preset.category === "stats")
								.map((preset) => (
									<Preset key={preset.id} content={preset.content} />
								))}
						</div>
					</div>
				</>
			) : (
				<>
					{messages.map((message) => {
						if (!message.ai) {
							return (
								<UserBubble
									key={message["Mensaje id"]}
									content={message.Contenido}
								/>
							);
						} else {
							return (
								<SystemBubble
									key={message["Mensaje id"]}
									content={message.Contenido}
								/>
							);
						}
					})}

					{/* {Nufobot writting} */}
					{/* <div className="chat chat-start bg-fallback-bg">
                <div className="chat-image avatar bg-fallback-bg">
                    <div className="w-10 rounded-full bg-fallback-bg">
                        <FaRobot />
                    </div>
                </div>
                <div className="chat-bubble bg-secondary w-fit flex flex-row">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div> */}
				</>
			)}
		</>
	);
}
