import { FaGear } from "react-icons/fa6";

export default function HomeLayout({ children }) {
	return (
		<div className="h-full w-full bg-fallback-bg block">
			<header className="flex-col h-fit py-2">
				<div className="flex-row">
					<h1 className="font-nufogy-typo">Nufogy</h1>
					<FaGear className="ml-auto" />
				</div>
				<div className="flex-row justify-start">
					<button className="top-tab border-primary">
						<span>Dashboard</span>
					</button>
					<button className="top-tab ml-1">
						<span>Feed</span>
					</button>
				</div>
			</header>
			{children}
		</div>
	);
}
