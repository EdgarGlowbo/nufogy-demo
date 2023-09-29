"use client";

import React from "react";
import { FaCaretRight, FaPlus, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export default function DietsPage() {
	const id = 1;

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
				<Link href={`diets/${id}`} className="w-full">
					<button className="flex w-full items-center justify-start">
						<span>Aumentar masa - Lic. Andrés</span>
						<FaCaretRight className="ml-auto" />
					</button>
				</Link>
				<Link href={`diets/${id}`} className="w-full">
					<button className="flex w-full items-center justify-start">
						<span>Cetogénica - Lic. Andrés</span>
						<FaCaretRight className="ml-auto" />
					</button>
				</Link>
				<Link href={`diets/${id}`} className="w-full">
					<button className="flex w-full items-center justify-start">
						<span>Vegana - Nutrióloga Nidia Ruiz</span>
						<FaCaretRight className="ml-auto" />
					</button>
				</Link>
			</main>
		</div>
	);
}
