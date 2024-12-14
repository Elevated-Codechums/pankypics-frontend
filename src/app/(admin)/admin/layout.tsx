"use client";

import VerticalNavbar from "@/Components/Header/VerticalNavbar";
import { cn } from "@/libs/utils";
import { useState, useEffect } from "react";
import { afacad, qwitcher_grypen, raleway } from "@/libs/fonts";
import "../../globals.css";
import Provider from "@/libs/Providers";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	// Keybinding logic
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === "b") {
				event.preventDefault();
				setIsNavbarOpen((prevOpen) => !prevOpen);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<html className="w-full flex items-center justify-center">
			<body
				className={cn(afacad, raleway, qwitcher_grypen, "antialiased")}
			>
				<VerticalNavbar
					setNavbarOpen={setIsNavbarOpen}
					isNavbarOpen={isNavbarOpen}
				/>
				<div
					className={cn(
						"transition-all duration-500 h-screen flex-grow",
						isNavbarOpen ? "ml-[350px]" : "ml-[120px]"
					)}
				>
					<Provider>{children}</Provider>
				</div>
			</body>
		</html>
	);
}
