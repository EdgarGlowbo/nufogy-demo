"use client";
import { FaGear } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HomeLayout({ children }) {
	const pathname = usePathname();

	return (
		<div className="h-screen w-screen bg-fallback-bg block">
			<header className="flex-col h-[7.5rem] py-2 fixed top-0 z-[1]">
				<div className="flex-row">
					<h1 className="font-nufogy-typo">Nufogy</h1>
					<FaGear className="ml-auto" />
				</div>
				<div className="flex-row justify-start">
					<Link href={"/"}>
						<button
							className={`top-tab ${
								pathname === "/" ? "!border-primary !border-b-2" : ""
							} `}
						>
							<span>Dashboard</span>
						</button>
					</Link>
					<Link href={"/feed"}>
						<button
							className={`top-tab ml-1  ${
								pathname === "/feed" ? "!border-primary !border-b-2" : ""
							} `}
						>
							<span>Feed</span>
						</button>
					</Link>
				</div>
			</header>
			{/* padding values account for heights of fixed header and bottom tabs */}
			<div className="pt-[8.5rem] pb-[3.25rem] h-full w-full">{children}</div>
		</div>
	);
}
