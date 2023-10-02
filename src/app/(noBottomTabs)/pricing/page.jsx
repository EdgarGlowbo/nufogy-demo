import React from "react";
import Link from "next/link";
import { FaDumbbell, FaXmark } from "react-icons/fa6";

export default function PricingPage() {
	return (
		<div className="h-screen w-screen bg-fallback-bg">
			<div className="fixed top-0 p-2 bg-fallback-bg">
				<Link href={"/"} className="self-end">
					<FaXmark className="text-text" />
				</Link>
			</div>
			<main className="p-1">
				{/* Para usuarios */}
				<div className="card bg-accent p-1">
					<div className="card-body bg-accent">
						<span>Para alcanzar tus objetivos: </span>
						<div className="card-title flex-row bg-accent">
							<h1>Nufogy</h1>
							<h1 className="text-yellow-500">Gold</h1>
						</div>
						<ul>
							<li className="flex flex-row items-start justify-start">
								<FaDumbbell className="h-6 w-6" />
								<h2 className="ml-2 text-text">
									Disfruta una experiencia sin anuncios.
								</h2>
							</li>
						</ul>
					</div>
				</div>
				{/* Para profesionales */}
			</main>
		</div>
	);
}
