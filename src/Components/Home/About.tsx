'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  // Reference for the image container
  const imageRef = useRef(null);

  // Track scroll position of the image container
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  // Map scroll position to vertical movement for inverted parallax effect
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="h-screen flex justify-center items-center bg-backgroundwhite">
      <div className="h-[90%] w-[94%] bg-darkbrown rounded-3xl flex flex-col gap-16 px-8 md:px-16">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-24">
          <h1 className="text-7xl font-bold text-headtext md:ml-28">
            About Me
          </h1>
          <p className="text-xl font-bold text-headtext md:w-[590px] mt-12 md:mt-0">
            Obcaecati est quidem amet quos, odio blanditiis? Expedita eveniet
            aliquid inventore at eius qui sit sapiente est? Figma ipsum
            component variant main layer. Vector rotate ipsum strikethrough
            bullet content inspect clip union. Pen arrange subtract hand flows r
            Select figjam pen asset group inspect horizontal figma. Arrange
            arrange effect slice duplicate frame layer hand clip vertical.
          </p>
        </div>

        {/* Animated Image Section */}
        <div className="h-[224px] mt-12 flex justify-center items-center">
          <motion.div
            ref={imageRef}
            style={{ y: translateY }}
            className="overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1626052241456-2cfbd6a227dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8"
              alt="A beautiful image"
              width={500} // Specify the image width
              height={300} // Specify the image height
              className="h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}