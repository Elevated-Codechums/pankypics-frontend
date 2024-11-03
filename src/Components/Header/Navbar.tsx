"use client";

import Link from "next/link";
import Instagram from "../../assets/instagram.svg";
import Menu from "./Menu";
import HamburgerOpen from "../../assets/hamburger-open.svg";
import HamburgerClose from "../../assets/hamburger-close.svg";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

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
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuRef]);

	return (
		<motion.div
			className="fixed z-50 top-0 left-0 w-full min-[751px]:px-40 min-[651px]:px-20 px-10 py-5"
			variants={navbarVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="flex items-center justify-between px-10 py-1 bg-gray backdrop-blur-2xl rounded-full text-white border border-white drop-shadow-md bg-opacity-50">
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
						className="flex flex-col items-center justify-center bg-gray rounded-lg text-white border border-white drop-shadow-md mt-5 gap-5 py-5"
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
