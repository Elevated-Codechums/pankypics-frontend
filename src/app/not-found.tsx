"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function NotFound() {
	const animate = useInfiniteAnimation();

	return (
		<div className="flex items-center justify-center min-h-screen">
			<AnimatePresence>
				<motion.div
					className="text-center"
					initial={{ scale: 0 }}
					animate={animate ? { rotate: 360, scale: 1 } : { rotate: -360, scale: 1 }}
					exit={{ scale: 0 }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
					}}
				>
					<motion.h1
						className="text-9xl font-bold font-afacad"
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{ type: "spring", stiffness: 100 }}
					>
						404
					</motion.h1>
					<motion.h2
						className="text-5xl font-raleway"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
					>
						Page Not Found
					</motion.h2>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
import { useEffect, useState } from "react";

function useInfiniteAnimation() {
	const [animate, setAnimate] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimate((prev) => !prev);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return animate;
}