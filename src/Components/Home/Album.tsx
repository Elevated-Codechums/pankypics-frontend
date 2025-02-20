"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Album() {
    return (
        <div className="h-screen flex justify-center items-center bg-backgroundwhite">
            {/* Outer container with brown background */}
            <div
                className="
                    relative
                    w-[95%]
                    max-w-[1450px]
                    bg-darkbrown
                    rounded-3xl
                    px-6 py-6
                    h-auto
                    md:h-[700px]
                    md:w-full
                    overflow-hidden
                "
            >
                {/* Title */}
                <h1 className="text-3xl md:text-4xl text-headtext font-bold">
                    Some of my Albums
                </h1>

                {/* Main content: stack (column) on small, row on md+ */}
                <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-center md:gap-10">
                    {/* Left column: album categories */}
                    <div className="flex flex-col space-y-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-2xl md:text-3xl font-bold text-headtext"
                        >
                            <a href="#">.Portrait</a>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-2xl md:text-3xl font-bold text-headtext"
                        >
                            <a href="#">.Landscape</a>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-2xl md:text-3xl font-bold text-headtext"
                        >
                            <a href="#">.Wildlife</a>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-2xl md:text-3xl font-bold text-headtext"
                        >
                            <a href="#">.Candid</a>
                        </motion.button>
                    </div>

                    {/* Right side: images */}
                    <div className="flex flex-row flex-wrap gap-4 mt-6 md:mt-0">
                        {/* 1st image */}
                        <motion.div
                            whileHover={{ scale: 1.05, cursor: "pointer" }}
                            className="relative w-[140px] h-[200px] md:w-[200px] md:h-[300px] rounded-3xl overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1733919504972-4486ea3ddc89?w=500&auto=format&fit=crop&q=60"
                                alt="Statue silhouette at sunset"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* 2nd image */}
                        <motion.div
                            whileHover={{ scale: 1.05, cursor: "pointer" }}
                            className="relative w-[140px] h-[200px] md:w-[200px] md:h-[300px] rounded-3xl overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1729731322082-c0a7c32229aa?w=500&auto=format&fit=crop&q=60"
                                alt="Ocean sunset"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* 3rd image */}
                        <motion.div
                            whileHover={{ scale: 1.05, cursor: "pointer" }}
                            className="relative w-[140px] h-[200px] md:w-[200px] md:h-[300px] rounded-3xl overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1729731322911-2635f53bb7e5?w=500&auto=format&fit=crop&q=60"
                                alt="Pier over the ocean"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* "View More" link */}
                <div className="block md:hidden mt-6 text-right">
                    <a
                        href="#"
                        className="text-white text-lg font-medium hover:underline"
                    >
                        View More
                    </a>
                </div>
                <div className="hidden md:block absolute bottom-6 right-8">
                    <a
                        href="#"
                        className="text-white text-xl hover:underline font-medium"
                    >
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
}
