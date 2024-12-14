"use client";

import { cn } from "@/libs/utils";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Edit from "@/assets/edit-two.svg";
import Album from "@/assets/album-two.svg";
import Photo from "@/assets/photo.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Admin() {
	const router = useRouter();

	const [authChecked, setAuthChecked] = useState(false);

	const { isCheckingAuth, checkAuth, isAuthenticated, admin } =
		useAuthStore();

	useEffect(() => {
		if (!authChecked) {
			const verifyAuth = async () => {
				await checkAuth();
				setAuthChecked(true); // Mark as checked after the first run
			};
			verifyAuth();
		}

		if (authChecked && isAuthenticated) {
			router.replace("/admin"); // Redirect if authenticated
		}
	}, [authChecked, checkAuth, isAuthenticated, router]);

	if (isCheckingAuth) {
		return (
			<div className="min-h-screen flex items-center justify-center text-3xl">
				<h1 className="text-3xl font-bold font-raleway">Loading...</h1>
			</div>
		);
	}

	return (
		<div
			className={cn(
				"min-h-screen flex items-center justify-center w-full"
			)}
		>
			<div
				className={cn(
					"min-h-screen w-full flex flex-col gap-5 items-center justify-center text-3xl",
					"sm:mt-0 mt-20"
				)}
			>
				<h1 className={cn("text-3xl font-bold font-raleway")}>
					Hi {admin?.name}!
				</h1>
				<div className={cn("h-[1px] bg-gray w-[80%]")}></div>
				<div
					className={cn(
						"grid md:grid-cols-3 grid-cols-1 gap-4 justify-center items-center"
					)}
				>
					{[
						{
							href: "/admin/upload/photo",
							icon: <Photo />,
							text: "Add a new photo",
						},
						{
							href: "/admin/photo/add",
							icon: <Edit />,
							text: "Edit an existing photo",
						},
						{
							href: "/admin/upload/photos",
							icon: <Album />,
							text: "Add a new album",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href={item.href}
								className={cn(
									"bg-black text-white flex flex-col h-[500px] p-10 rounded-xl w-full items-center justify-center gap-2"
								)}
							>
								{item.icon}
								<span>{item.text}</span>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
