"use client";
import { useEffect, useState } from "react";
import ChevronLeft from "@/assets/chevron-left.svg"
import ChevronRight from "@/assets/chevron-right.svg"
import { motion } from "framer-motion";

interface ImageSliderProps {
	images: string[];
	interval: number;
}

export default function ImageSlider({ images, interval }: ImageSliderProps) {
	const [index, setIndex] = useState(0);

	const prevSlide = () => {
		setIndex(index - 1);
		// if first image go to last image
		if (index === 0) {
			setIndex(images.length - 1);
		}
	};

	const nextSlide = () => {
		setIndex(index + 1);
		// if last image go to first image
		if (index === images.length - 1) {
			setIndex(0);
		}
	};


	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex(index + 1);
			// if last image go to first image
			if (index === images.length - 1) {
				setIndex(0);
			}
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, [index, images.length, interval]);

	return (
		<div className="relative w-full min-h-screen">
			<div
				className="absolute w-full h-full flex items-center justify-center"
				style={{ backgroundImage: `url(${images[index]})` }}
			></div>
            <div className="absolute w-full h-full bg-black opacity-50"></div>
			<div >
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
			</div>
		</div>
	);
}
