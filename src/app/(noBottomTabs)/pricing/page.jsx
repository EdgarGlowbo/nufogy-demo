import React from "react";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

export default function PricingPage() {
	return (
		<div className="h-screen w-screen bg-background">
			<div className="fixed top-0 p-2">
				<Link href={"/"} className="self-end">
					<FaXmark className="text-text" />
				</Link>
			</div>
			<main>
				{/* Para usuarios */}
				<div className="card bg-accent">
					<div className="card-body">
						<span>Para alcanzar tus objetivos: </span>
						<div className="card-title flex-row">
							<h1>Nufogy</h1>
							<h1>Gold</h1>
						</div>
					</div>
				</div>
				{/* Para profesionales */}
			</main>
		</div>
	);
}
