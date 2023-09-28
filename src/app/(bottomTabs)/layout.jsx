import BottomTabs from "@/components/BottomTabs";
import FloatingButton from "@/components/FloatingButton";

export default function BottomTabsLayout({ children }) {
	return (
		<div>
			<div>
				{children}
				{/* Add button */}
				{/* Bottom tabs */}
				<div className="fixed bottom-0">
					<FloatingButton />
					<BottomTabs />
				</div>
			</div>
		</div>
	);
}
