"use client";

import Link from "next/link";
import Instagram from "../../assets/instagram.svg";
import Menu from "./Menu";
import HamburgerOpen from "../../assets/hamburger-open.svg";
import HamburgerClose from "../../assets/hamburger-close.svg";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navbarVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			className="fixed z-50 top-0 left-0 w-full min-[751px]:px-40 min-[651px]:px-20 px-10 py-5"
			variants={navbarVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="flex items-center justify-between px-10 py-1 bg-gray backdrop-blur-2xl rounded-full text-white border border-white drop-shadow-md bg-opacity-50">
				<div className="">
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
						<span className="">
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
			{
				isOpen && (
					<motion.div
						className="flex flex-col items-center justify-center bg-gray rounded-lg text-white border border-white drop-shadow-md mt-5 gap-5 py-5"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
					>
						<Menu />
						<Link href="/">
							<span className="mt-5">
								<Instagram />
							</span>
						</Link>
					</motion.div>
				)
			}
		</motion.div>
	);
}
