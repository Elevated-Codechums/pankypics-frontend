"use client";

import { div } from "framer-motion/client";

import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ParallaxHeadings() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ container: containerRef });

//   const xLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   const xRight = useTransform(scrollYProgress, [0, 1], [0, 200]);

//   return (
//     <div ref={containerRef} className="h-screen scrollbar-hide overflow-y-scroll">
//       <div className="h-[200vh] flex flex-col justify-center items-center bg-backgroundwhite">
//         <div className="h-[25%] w-[94%] bg-darkbrown rounded-3xl  flex flex-col justify-center items-center gap-10">
//           <motion.div
//             className="text-7xl font-bold text-headtext"
//             style={{ x: xLeft }}
//           >
//             <h1 className="flex gap-6 scrollbar-hide">
//               <span className="hover:cursor-pointer hover:text-white">PAST WORK</span>
//               <span className="hover:cursor-pointer hover:text-white">ALBUMS</span>
//               <span className="hover:cursor-pointer hover:text-white">CONTACT US</span>
//               <span className="hover:cursor-pointer hover:text-white">ME</span>
//             </h1>
//           </motion.div>
//           <motion.div
//             className="text-7xl font-bold text-headtext"
//             style={{ x: xRight }}
//           >
//             <h1 className="flex gap-6">
//               <span className="hover:cursor-pointer hover:text-white">MEDIA</span>
//               <span className="hover:cursor-pointer hover:text-white">PAST WORK</span>
//               <span className="hover:cursor-pointer hover:text-white">ALBUMS</span>
//               <span className="hover:cursor-pointer hover:text-white">CONTACT</span>
//             </h1>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ScrollLink() {
  return (
    <>
    <div
      className="container h-full w-full flex flex-row gap-5 overflow-x-hidden items-center justify-center  bg-backgroundwhite  py-20 "
    >

    
      <div className="flex flex-none item-center rounded-3xl w-[94%]  bg-darkbrown justify-center   gap-14 overflow-hidden ">
        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            
            ease: "linear",
          }}
          className=" "
        >
          <div className="h-52 font-bold mt-40  w-[94%] gap-5 text-6xl ">
            <div className=" flex flex-row text-headtext justify-center items-center gap-7">
            <h1 className="hover:cursor-pointer  hover:text-white ">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            <h1 className="hover:cursor-pointer hover:text-white ">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white ">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            <h1 className="hover:cursor-pointer hover:text-white ">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              MEDIA
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              PASTWORK
            </h1>
            <h1 className="hover:cursor-pointer  hover:text-white">
              ALBUMS
            </h1>
            <h1 className="hover:cursor-pointer   hover:text-white">
              CONTACT
            </h1>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
}
