"use client";
import { useEffect, useState } from "react";
// import ChevronLeft from "@/assets/chevron-left.svg"
// import ChevronRight from "@/assets/chevron-right.svg"
import { motion } from "framer-motion";

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

	// const prevSlide = () => {
	// 	setIndex([index === 0 ? images.length - 1 : index - 1, -1]);
	// };

	// const nextSlide = () => {
	// 	setIndex([index === images.length - 1 ? 0 : index + 1, 1]);
	// };

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
			{/* <div>
				<div className="absolute top-1/2 left-0 transform -translate-y-1/2">
					<button
						onClick={prevSlide}
						className="px-4 py-2 bg-gray rounded-full text-white"
					>
						<ChevronLeft />
					</button>
				</div>
				<div className="absolute top-1/2 right-0 transform -translate-y-1/2">
					<button
						onClick={nextSlide}
						className="px-4 py-2 bg-gray rounded-full text-white"
					>
						<ChevronRight />
					</button>
				</div>
			</div> */}
		</div>
	);
}
