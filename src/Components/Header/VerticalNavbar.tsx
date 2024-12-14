"use client";

import { cn } from "@/libs/utils";
import { useState, useEffect } from "react";
import { Button } from "@/Components/Utilities/Buttons";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import Plus from "@/assets/plus.svg";
import Camera from "@/assets/camera.svg";
import Album from "@/assets/album.svg";
import Open from "@/assets/open.svg";
import Collapse from "@/assets/collapse.svg";
import Edit from "@/assets/edit.svg";
import Logout from "@/assets/logout.svg";
import VerticalMenu from "./VerticalMenu";
import HamburgerOpen from "@/assets/hamburger-open.svg";
import HamburgerClose from "@/assets/hamburger-close.svg";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sidebarVariants = {
	open: { width: "350px", transition: { duration: 0.5 } },
	closed: { width: "120px", transition: { duration: 0.5 } },
};

const contentVariants = {
	open: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
	closed: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export default function VerticalNavbar({
	setNavbarOpen,
	isNavbarOpen,
}: {
	setNavbarOpen: (state: boolean) => void;
	isNavbarOpen: boolean;
}) {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const savedState = localStorage.getItem("navbarOpen");
		if (savedState !== null) {
			setOpen(JSON.parse(savedState));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("navbarOpen", JSON.stringify(open));
	}, [open]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === "b") {
				event.preventDefault();
				setOpen((prevOpen) => !prevOpen);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const { logoutAdmin } = useAuthStore();
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await logoutAdmin(); // Await the logout function
			router.push("/login"); // Redirect to the login page
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	const mainMenu = [
		{
			head: { heading: "View Uploads", icon: <Camera /> },
			links: [
				{
					name: "Photos",
					href: "/admin/upload/photo",
					icon: <Camera />,
				},
				{
					name: "Albums",
					href: "/admin/upload/photos",
					icon: <Album />,
				},
			],
		},
		{
			head: { heading: "Edit & Delete", icon: <Edit /> },
			links: [
				{
					name: "Photos",
					href: "/admin/upload/photo",
					icon: <Camera />,
				},
				{
					name: "Albums",
					href: "/admin/upload/photos",
					icon: <Album />,
				},
			],
		},
	];

	const handleOpen = () => {
		setOpen(!open);
		setNavbarOpen(!open); // Update parent component's state
	};

	return (
		<motion.div
			className={cn(
				"bg-black h-full fixed top-0 left-0 text-white flex flex-col justify-between gap-10",
				isNavbarOpen
					? "items-start p-5 w-[350px]"
					: "items-center p-3 w-[120px]"
			)}
			initial={false}
			animate={isNavbarOpen ? { width: "350px" } : { width: "120px" }}
			transition={{ duration: 0.5 }}
		>
			<Button onClick={handleOpen}>
				{open ? <Collapse /> : <Open />}
			</Button>
			<>
				{isMobile && (
					<Button
						onClick={handleOpen}
						className="fixed top-4 left-4 z-50"
					>
						{open ? <HamburgerClose /> : <HamburgerOpen />}
					</Button>
				)}
				{(open || !isMobile) && (
					<motion.div
						className={cn(
							"bg-black h-full fixed top-0 left-0 text-white rounded-xl rounded-bl-none rounded-tl-none flex flex-col justify-between gap-10",
							open ? "items-start p-5" : "items-center p-3",
							isMobile ? "w-full" : ""
						)}
						variants={sidebarVariants}
						initial={false}
						animate={open ? "open" : "closed"}
					>
						<motion.div
							className={cn(
								"flex items-center justify-center gap-2"
							)}
							variants={contentVariants}
						>
							<AnimatePresence>
								{open ? (
									<Link
										href="/admin"
										className={cn(
											"flex items-center justify-center gap-2"
										)}
									>
										<motion.h3
											className={cn(
												"font-qwitcher_grypen text-7xl"
											)}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											PankyPics
										</motion.h3>
										<motion.span
											className={cn(
												"font-afacad text-2xl uppercase mb-5 px-3 bg-white rounded-full text-black"
											)}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											Admin
										</motion.span>
									</Link>
								) : (
									<motion.div
										className={cn(
											"flex flex-col items-center justify-center gap-2"
										)}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<h3
											className={cn(
												"font-qwitcher_grypen text-4xl"
											)}
										>
											PP
										</h3>
										<span
											className={cn(
												"font-afacad text-2xl uppercase px-3 bg-white rounded-full text-black"
											)}
										>
											<Link href="/admin">Admin</Link>
										</span>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
						<motion.div variants={contentVariants}>
							<Button
								className={cn(
									"bg-white rounded-xl text-black flex items-center justify-center gap-2 hover:text-white hover:bg-gray/50"
								)}
							>
								<Plus />
								{open && <span>New</span>}
							</Button>
						</motion.div>
						<motion.div
							className={cn("flex flex-col items-start gap-7")}
							variants={contentVariants}
						>
							<AnimatePresence>
								{open && (
									<motion.h4
										className={cn(
											"uppercase font-bold font-afacad text-4xl"
										)}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										Main Menu
									</motion.h4>
								)}
							</AnimatePresence>
							{mainMenu.map((menu, index) => (
								<VerticalMenu
									key={index}
									head={menu.head}
									links={menu.links}
									open={open}
								/>
							))}
						</motion.div>
						<motion.div
							className={cn("w-full")}
							variants={contentVariants}
						>
							<div
								className={cn("h-[1px] bg-white w-full")}
							></div>
							<div className={cn("py-2")}>
								{open ? (
									<h4
										className={cn(
											"text-lg font-raleway text-center"
										)}
									>
										Version 1.0.0
									</h4>
								) : (
									<h4
										className={cn(
											"text-lg font-raleway text-center"
										)}
									>
										v1.0.0
									</h4>
								)}
							</div>
							<div
								className={cn("h-[1px] bg-white w-full")}
							></div>
							<AnimatePresence>
								{open ? (
									<motion.div
										className={cn("text-center py-4")}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<p>
											&copy; {new Date().getFullYear()}{" "}
											PankyPics. All Rights Reserved
										</p>
									</motion.div>
								) : (
									<motion.div
										className={cn("text-center py-2")}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<p>
											&copy; {new Date().getFullYear()}{" "}
											PankyPics
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
						<motion.div
							className={cn(
								"w-full flex items-center justify-between",
								open ? "flex-row" : "flex-col-reverse gap-2"
							)}
							variants={contentVariants}
						>
							<Button
								onClick={handleLogout}
								className={cn(
									"bg-white text-black flex items-center justify-between gap-2 hover:text-white hover:bg-gray/50",
									isMobile ? "justify-center w-full" : ""
								)}
							>
								<Logout />
								{open && <span>Logout</span>}
							</Button>
							{open ? (
								<div
									className={cn("w-[1px] bg-white h-full")}
								></div>
							) : (
								<div
									className={cn("h-[1px] bg-white w-full")}
								></div>
							)}
							{!isMobile && (
								<Button onClick={handleOpen} variant={"ghost"}>
									{open ? <Collapse /> : <Open />}
								</Button>
							)}
						</motion.div>
					</motion.div>
				)}
			</>
		</motion.div>
	);
}
