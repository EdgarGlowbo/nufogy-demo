import React from "react";
import { FaCalendar } from "react-icons/fa6";

export default function DashboardPage() {
	return (
		<div className="bg-fallback-bg p-2">
			{/* Gold ad */}
			<div className="rounded-2xl mb-3 p-1">
				<div className="flex-row">
					<h1>Nufogy&nbsp;</h1>
					<h1 className="inline-block text-yellow-500">Gold</h1>
				</div>
				<span className="text-center">
					Obtén Gold para una experiencia sin anuncios.
				</span>
				<div>
					<button className="rounded-3xl bg-primary">
						<span className="text-xl text-accent">Beneficios de Gold</span>
					</button>
				</div>
			</div>
			<main className="p-1 bg-fallback-bg">
				{/* Streak */}
				<div className="rounded-2xl py-3 px-2">
					<h2 className="pb-3">Tu racha</h2>
					<div className="rounded-2xl bg-accent py-2">
						<div className="rounded-full h-12 w-12 p-3 bg-background">
							<FaCalendar />
						</div>
						<h1 className="font-base">2</h1>
						<span className="opacity-70">Días de racha</span>
						<br />
						<span className="opacity-70">Tu mejor racha:</span>
						<span className="opacity-70">19 días</span>
					</div>
				</div>
			</main>
		</div>
	);
}