"use client";

import Link from "next/link";
import Instagram from "../../assets/instagram.svg";
import Menu from "./Menu";
import HamburgerOpen from "../../assets/hamburger-open.svg";
import HamburgerClose from "../../assets/hamburger-close.svg";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/libs/utils";
import useScrollState from "@/Hooks/useScrollState";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const [isClient, setIsClient] = useState(false); // Add client-side check
	const isScrolled = useScrollState();

	const navbarVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	};

	useEffect(() => {
		setIsClient(true);
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuRef]);

	// Only render with animations after confirming we're on the client
	if (!isClient) return null;

	return (
		<motion.div
			className="fixed z-50 top-0 left-0 w-full"
			variants={navbarVariants}
			initial="hidden"
			animate="visible"
		>
			<div
				className={cn(
					"flex items-center justify-between px-10 py-1 bg-gray text-white drop-shadow-md",
					{
						"backdrop-blur-2xl bg-opacity-50": isScrolled,
					}
				)}
			>
				<div>
					<Link href="/">
						<span className="font-qwitcher_grypen font-bold text-3xl">
							PankyPics
						</span>
					</Link>
				</div>
				<div className="font-raleway min-[841px]:flex hidden">
					<Menu />
				</div>
				<div className="min-[841px]:flex hidden">
					<Link href="/">
						<span>
							<Instagram />
						</span>
					</Link>
				</div>
				<div className="min-[841px]:hidden flex hover:cursor-pointer">
					{isOpen ? (
						<HamburgerClose onClick={() => setIsOpen(!isOpen)} />
					) : (
						<HamburgerOpen onClick={() => setIsOpen(!isOpen)} />
					)}
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={menuRef}
						className="flex flex-col items-center justify-center bg-gray rounded-lg text-white rounded-t-none drop-shadow-md gap-5 py-5"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={menuVariants}
					>
						<Menu />
						<Link href="/">
							<span className="mt-5">
								<Instagram />
							</span>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
