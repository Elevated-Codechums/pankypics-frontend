/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/libs/utils";
import Image from "next/image";
import ChevronLeft from "@/assets/chevron-left.svg";
import ChevronRight from "@/assets/chevron-right.svg";
import { motion, AnimatePresence } from "framer-motion";

interface ImageProps {
    id: number;
    imgSrc: string;
}

interface SlidesProps {
    images: ImageProps[];
    interval: number; // New prop for interval
}

export function LandscapeSlides({ images, interval }: SlidesProps) {
    const [selectedImage, setSelectedImage] = useState<ImageProps>(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const startSlideShow = () => {
            return setInterval(() => {
                setSelectedImage((prevImage) => {
                    const currentIndex = images.findIndex(
                        (img) => img.id === prevImage.id
                    );
                    const nextIndex = (currentIndex + 1) % images.length;
                    return images[nextIndex];
                });
            }, interval);
        };

        let slideInterval = startSlideShow();

        const resetSlideShow = () => {
            clearInterval(slideInterval);
            slideInterval = startSlideShow();
        };

        return () => clearInterval(slideInterval);
    }, [images, interval]);

    useEffect(() => {
        const currentIndex = images.findIndex(
            (img) => img.id === selectedImage.id
        );
        setCurrentIndex(currentIndex);
    }, [selectedImage, images]);

    const handleImageClick = (image: ImageProps) => {
        setSelectedImage(image);
    };

    const handlePrevClick = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const handleNextClick = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const visibleImages = images.slice(
        Math.floor(currentIndex / 3) * 3,
        Math.floor(currentIndex / 3) * 3 + 3
    );

    return (
        <div
            className={cn(
                "w-full flex flex-col-reverse gap-5 justify-between"
            )}
        >
            <div className="flex gap-4 flex-row items-center justify-center">
                <motion.button
                    onClick={handlePrevClick}
                    className="p-2 bg-gray-200 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft />
                </motion.button>
                <AnimatePresence>
                    {visibleImages.map((image) => (
                        <motion.button
                            key={image.id}
                            className={cn(
                                selectedImage.id === image.id
                                    ? "border-2 border-black-500 rounded-lg shadow-lg"
                                    : "",
                            )}
                            onClick={() => handleImageClick(image)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={image.imgSrc}
                                alt="Image"
                                width={50}
                                height={50}
                                className="rounded-md shadow-md"
                            />
                        </motion.button>
                    ))}
                </AnimatePresence>
                <motion.button
                    onClick={handleNextClick}
                    className="p-2 bg-gray-200 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight />
                </motion.button>
            </div>
            <div className="flex items-center w-full">
                <div className="relative w-[1200px] h-[600px]">
                    <AnimatePresence mode={'wait'}>
                        <motion.div
                            key={selectedImage.id}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full h-full"
                        >
                            <Image
                                src={selectedImage.imgSrc}
                                alt="Image"
                                width={500}
                                height={500}
                                className="rounded-md shadow-md w-full h-full"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
