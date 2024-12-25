"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="h-screen flex justify-center items-center bg-backgroundwhite">
      <div className="h-[90%] w-[94%] bg-darkbrown rounded-3xl flex flex-col gap-16 px-8 md:px-16">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-24">
          <h1 className="text-7xl font-bold text-headtext md:ml-28">About Me</h1>
          <p className="text-xl font-bold text-headtext md:w-[590px] mt-12 md:mt-0">
            Obcaecati est quidem amet quos, odio blanditiis? Expedita eveniet aliquid inventore at eius qui sit sapiente est?
            Figma ipsum component variant main layer. Vector rotate ipsum strikethrough bullet content inspect clip union.
            Pen arrange subtract hand flows r Select figjam pen asset group inspect horizontal figma. Arrange arrange effect slice duplicate frame layer hand clip vertical.
          </p>
        </div>

        {/* Animated Image Section */}
        <div className="h-[224px] mt-12 flex justify-center items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            transition={{ duration: 2 }}
            className="overflow-hidden"  // Ensure image is clipped to the container's size during animation
          >
            <motion.img
              src="https://images.unsplash.com/photo-1626052241456-2cfbd6a227dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8"
              alt="A beautiful image"
              className="h-auto"  // Maintain aspect ratio of the image
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
