"use client";
import BottomTabs from "@/components/BottomTabs";
import ExerciseEntryForm from "@/components/ExerciseEntryForm";
import FloatingButton from "@/components/FloatingButton";
import { createContext, useState, useContext } from "react";

const LogsContext = createContext();
export default function BottomTabsLayout({ children }) {
	const [logs, setLogs] = useState([]);
	return (
		<div className="h-screen w-screen bg-fallback-bg block">
			<LogsContext.Provider value={{ logs, setLogs }}>
				<ExerciseEntryForm />
				{children}
			</LogsContext.Provider>
			{/* Add button */}
			{/* Bottom tabs */}
			<div className="fixed bottom-0">
				<FloatingButton />
				<BottomTabs />
			</div>
		</div>
	);
}

export const useLogs = () => {
	const context = useContext(LogsContext);
	if (context === undefined) {
		throw new Error("useLogs must be used within a LogsContextProvider");
	}
	return context;
};
