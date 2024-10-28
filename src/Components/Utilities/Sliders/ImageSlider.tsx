"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
	images: string[];
	interval: number;
}

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction > 0 ? -1000 : 1000,
			opacity: 0,
		};
	},
};

export default function ImageSlider({ images, interval }: ImageSliderProps) {
	const [[index, direction], setIndex] = useState([0, 0]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex([index === images.length - 1 ? 0 : index + 1, 1]);
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, [index, images.length, interval]);

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					className="absolute inset-0 w-full h-full flex items-center justify-center"
					style={{ backgroundImage: `url(${images[index]})` }}
					key={index}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					custom={direction}
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
				></motion.div>
			</AnimatePresence>
		</div>
	);
}
