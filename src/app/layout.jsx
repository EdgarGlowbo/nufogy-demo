import "./globals.css";
import { Major_Mono_Display, Philosopher, Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-base",
});

const majorMonoDisplay = Major_Mono_Display({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-nufogy-typo",
});

const philosopher = Philosopher({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-headings",
});
export const metadata = {
	title: "Nufogy",
	description: "Alcanza tus objetivos con Nufogy",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${majorMonoDisplay.variable} ${philosopher.variable} h-screen w-screen relative`}
			>
				{children}
			</body>
		</html>
	);
}
