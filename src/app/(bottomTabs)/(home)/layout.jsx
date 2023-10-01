"use client";
import { FaGear } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HomeLayout({ children }) {
	const pathname = usePathname();

	return (
		<div className="h-full w-full bg-fallback-bg block">
			<header className="flex-col h-fit py-2">
				<div className="flex-row">
					<h1 className="font-nufogy-typo">Nufogy</h1>
					<FaGear className="ml-auto" />
				</div>
				<div className="flex-row justify-start">
					<Link href={"/"}>
						<button
							className={`top-tab ${pathname === "/" ? "border-primary" : ""} `}
						>
							<span>Dashboard</span>
						</button>
					</Link>
					<Link href={"/feed"}>
						<button
							className={`top-tab ml-1 ${
								pathname === "/feed" ? "border-primary" : ""
							} `}
						>
							<span>Feed</span>
						</button>
					</Link>
				</div>
			</header>
			{children}
		</div>
	);
}
