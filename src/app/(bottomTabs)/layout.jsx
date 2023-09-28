import BottomTabs from "@/components/BottomTabs";
import FloatingButton from "@/components/FloatingButton";

export default function BottomTabsLayout({ children }) {
	return (
		<div className="h-screen w-screen bg-fallback-bg block">
			{children}
			{/* Add button */}
			{/* Bottom tabs */}
			<div className="fixed bottom-0">
				<FloatingButton />
				<BottomTabs />
			</div>
		</div>
	);
}
