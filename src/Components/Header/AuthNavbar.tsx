"use client";

import { cn } from "@/libs/utils";
import Link from "next/link";
import ArrowLeft from "@/assets/arrow-left.svg";
import { motion } from "framer-motion";

export default function AuthNavbar() {
    return (
        <motion.nav
            className="fixed top-0 left-0 flex flex-col md:flex-row md:items-center justify-between w-full px-4 py-2 bg-gray-800"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <motion.h3
                    className={cn("font-qwitcher_grypen text-4xl md:text-7xl")}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    PankyPics
                </motion.h3>
                <motion.span
                    className={cn(
                        "font-afacad text-xl md:text-2xl uppercase mb-2 md:mb-5 px-2 md:px-3 bg-black rounded-full text-white"
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Admin
                </motion.span>
            </div>
            <motion.div
                className="flex bg-black text-2xl md:text-3xl p-3 md:p-4 rounded-xl text-white font-raleway items-center gap-2 mt-2 md:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <Link className={cn("flex items-center justify-center gap-2")} href="/">
                    <ArrowLeft />
                    <span>Home</span>
                </Link>
            </motion.div>
        </motion.nav>
    );
}
