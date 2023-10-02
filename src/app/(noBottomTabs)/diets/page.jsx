"use client";

import React from "react";
import { FaCaretRight, FaPlus, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export default function DietsPage() {
	return (
		<div>
			<header className="justify-center items-center">
				<Link href={"programs"} className="mr-auto">
					<FaArrowLeft />
				</Link>

				<h1 className="mr-auto">Dietas</h1>
			</header>
			<div className="bg-fallback-bg items-start p-1">
				<button className="flex bg-secondary items-center justify-center py-1">
					<FaPlus className="h-2.5 w-2.5 text-text" />
					&nbsp;
					<span>Crear</span>
				</button>
			</div>
			<main className="p-1">
				{/* diet card */}
				<Link href={`diets/fakediet`} className="w-full">
					<button className="card flex-row w-full items-center justify-start shadow-xl">
						<div className="card-body  p-2 gap-0 rounded-box items-start">
							<span>Aumentar masa</span>
							<span className="opacity-70">Lic. Andrés</span>
						</div>
						<FaCaretRight className="ml-auto" />
					</button>
				</Link>
				<Link href={`diets/fakediet`} className="w-full">
					<button className="card flex-row w-full items-center justify-start shadow-xl">
						<div className="card-body p-2 gap-0 rounded-box items-start">
							<span>Vegana</span>
							<span className="opacity-70">Nutrióloga Nidia Ruiz</span>
						</div>
						<FaCaretRight className="ml-auto" />
					</button>
				</Link>
				<Link href={`diets/fakediet`} className="w-full">
					<button className="card flex-row w-full items-center justify-start shadow-xl">
						<div className="card-body p-2 gap-0 rounded-box items-start">
							<span>Cetogénica</span>
							<span className="opacity-70">Lic. Andrés</span>
						</div>
						<FaCaretRight className="ml-auto" />
					</button>
				</Link>
			</main>
		</div>
	);
}
