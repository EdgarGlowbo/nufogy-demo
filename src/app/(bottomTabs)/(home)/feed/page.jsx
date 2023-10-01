import React from "react";
import TrainerSrc from "@assets/entrenador.jpg";
import TrainerImg from "@assets/post1.jpg";
import NutriSrc from "@assets/nutri.jpg";
import NutriImg from "@assets/salad.jpg";
import Post from "./Post";

export default function FeedPage() {
	return (
		<main className="p-1 overflow-y-auto justify-start flex-1">
			<span className="opacity-70">Publicidad</span>
			<Post
				profilePictureSrc={TrainerSrc}
				postOwnerUsername={"Dr. Bill Wong"}
				postOwnerTitle={"Entrenador personal"}
				timestamp={"Hace 25 min"}
				postTitle={"Natural Bodybuilding"}
				postDescription={
					"¿Te quieres ver en la mejor forma de tu vida? Con 10 años de experiencia en el fisicoculturismo natural."
				}
				postImgSrc={TrainerImg}
			/>
			<Post
				profilePictureSrc={NutriSrc}
				postOwnerUsername={"Larissa Germán"}
				postOwnerTitle={"Nutrióloga"}
				timestamp={"Hace 12 min"}
				postTitle={"Estilo de vida saludable"}
				postDescription={
					"Si estás cansado de las dietas que te dejan con hambre, yo te puedo hacer un plan de alimentación personalizado para alcanzar tus objetivos!"
				}
				postImgSrc={NutriImg}
			/>
		</main>
	);
}
