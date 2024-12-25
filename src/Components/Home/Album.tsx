"use client";
import {motion} from "framer-motion";
import Image from "next/image"


export default function Album(){
    return(
        <div className='h-screen flex justify-center items-center bg-backgroundwhite '>
                        <div className='h-[90%] w-[94%] bg-darkbrown rounded-3xl flex '>
                            <h1 className=' justify-center text-7xl ml-[60px] mt-[50px] text-headtext  h-[100px]  font-bold'>Some of My Albums</h1>
                            <div className='flex flex-row  h-[20rem] mt-[250px]  justify-center items-center   w-[20rem]'>
                                <div className="ml-[-500]bg-white h-[20rem] w-[20rem] rounded-3xl">
                                
                                    <motion.button 
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    className='text-3xl  ml-[-550px] flex flex-col font-bold text-headtext'>
                                       <a href="#">.Portrait<br /></a> 
                                    </motion.button>
                                    <motion.button 
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    className='text-3xl  ml-[-550px] flex flex-col font-bold text-headtext'>
                                       <a href="#">.Landscape<br /></a> 
                                    </motion.button>
                                    <motion.button 
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    className='text-3xl  ml-[-550px] flex flex-col font-bold text-headtext'>
                                       <a href="#">.Wildlife<br /></a> 
                                    </motion.button>
                                    <motion.button 
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                    className='text-3xl  ml-[-550px] flex flex-col font-bold text-headtext'>
                                        <a href="#">.Candid<br /></a>
                                    </motion.button>
                                    
                                </div>
                                
                                <div className='flex w-130 gap-5 ml-[-300px] flex-row'>
                                    <motion.div
                                    whileHover={{
                                        zoom:1.1,
                                        cursor: 'pointer'
                                    }}
                                    >
                                    <Image className="rounded-3xl"
                                    
                                    src="https://images.unsplash.com/photo-1733919504972-4486ea3ddc89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D"
                                    height={70}
                                    width={1890}
                                    alt=''
                                    
                                    />
                                    </motion.div>
                                    <motion.div
                                    whileHover={{
                                        zoom: 1.1,
                                        cursor: 'pointer'
                                    }}
                                    >
                                    <Image  className="rounded-3xl"
                                    
                                    src="https://images.unsplash.com/photo-1729731322082-c0a7c32229aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
                                    height={60}
                                    width={1890}
                                    alt=''/>
                                    </motion.div>

                                    <motion.div
                                    whileHover={{   
                                        cursor: 'pointer',  
                                        zoom: 1.1,}}>
                                    <Image className="rounded-3xl"
                                        src="https://images.unsplash.com/photo-1729731322911-2635f53bb7e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
                                        height={100}
                                        width={1890}
                                        alt=''/>
                                    </motion.div>

                                   
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
    )
}