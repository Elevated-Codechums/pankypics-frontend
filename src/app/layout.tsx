import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/libs/utils";
import { afacad, qwitcher_grypen, raleway } from "@/libs/fonts";
import Provider from "@/libs/Providers";
import Navbar from "@/Components/Header/Navbar";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
	title: "PankyPics",
	description: "A digital journey by Pankaj Jain",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(afacad, raleway, qwitcher_grypen, "antialiased")}>
				<Navbar />
				<Provider>{children}</Provider>
				<Footer />
			</body>
		</html>
	);
}
