import React from "react";
import Image from "next/image";
import TrainerSrc from "@assets/entrenador.jpg";
import NutriSrc from "@assets/nutri.jpg";
import Post from "./Post";

export default function FeedPage() {
	return (
		<main className="p-1">
			<span className="opacity-70">Publicidad</span>
			<div className="card bg-accent shadow-xl">
				<div className="card-body rounded-2xl rounded-b-none p-2">
					{/* post owner */}
					<Post
						ImageSrc={TrainerSrc}
						postOwnerUsername={"Dr. Bill Wong"}
						timestamp={"Hace 25 min"}
					/>

					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
				<figure>
					<img
						src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
			</div>
		</main>
	);
}
