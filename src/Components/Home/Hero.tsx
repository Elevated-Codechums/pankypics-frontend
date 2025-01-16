"use client";
import Image from "next/image"
import  {motion} from "framer-motion"
import Navbar from "../Header/Navbar";
import Gallery from "../Gallery/Gallery";
export default function Hero(){
    return(
        <>
        
        
        <Navbar />
         <div className='h-screen flex justify-center items-center bg-lightbrown '> 
                        <div className='h-[90%] w-[94%] bg-darkbrown rounded-3xl flex'>
                            <div>
                                <h1 className=' justify-center text-9xl ml-[60px] mt-[120px] text-headtext   font-bold'>A collection of <br />
                                   <motion.div 
                                   initial={{opacity:0, }}
                                    animate={{opacity:1,}}
                                    transition={{duration:2}}

                                   >
                                   <span>Memories</span>
                                    </motion.div></h1>
                            </div>
                            <div>
                               <motion.div 
                               initial={{opacity:0, y: 50}}
                               animate={{opacity:1, y:0}}
                               transition={{duration:0.5}}
                               className='bottom-20  absolute left-20'>
                                    <Image className="rounded-3xl"
                                    src= "https://images.unsplash.com/photo-1733235014900-380902922aa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width = {350}
                                    height = {70}
                                    alt =''
                                    />
                               </motion.div>
                                
                                <motion.div 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:0.5}}>
                                <Image className='top-48 absolute z-10 rounded-3xl right-40'
                                
                                src= "https://images.unsplash.com/photo-1732373870219-ac6444949471?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width = {250}
                                height = {70}
                                alt =''
                                />
                                </motion.div>
                                
                                <h1 className='text-headtext top-[620px] right-40 absolute font-bold text-base ml-[80px] italic z-0'>portraits for one , portraits <br />
                                for all</h1>
                            </div>
                        </div>
                    </div>
                    </>
                    
    )
}
