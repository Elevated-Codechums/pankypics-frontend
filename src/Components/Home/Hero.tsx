import Image from "next/image"


export default function Hero(){
    return(
        
         <div className='h-screen flex justify-center items-center bg-lightbrown '> 
                        <div className='h-[90%] w-[94%] bg-darkbrown rounded-3xl flex align-center'>
                            <div>
                                <h1 className=' justify-center text-9xl ml-[60px] mt-[120px] text-headtext   font-bold'>A collection of <br />
                                    Memories <span className='text-headtext text-base ml-[80px] italic'>photographer's paradise</span></h1>
                            </div>
                            <div>
                                <Image className='bottom-20  absolute rounded-3xl  left-20'
                            
                                src= "https://images.unsplash.com/photo-1733235014900-380902922aa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width = {350}
                                height = {70}
                                alt =''
                                />
                                <Image className='top-20 absolute z-10 rounded-3xl right-20'
                                
                                src= "https://images.unsplash.com/photo-1732373870219-ac6444949471?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width = {350}
                                height = {70}
                                alt =''
                                />
                                <h1 className='text-headtext top-[620px] right-40 absolute font-bold text-base ml-[80px] italic z-0'>portraits for one , portraits <br />
                                for all</h1>
                            </div>
                        </div>
                    </div>
                    
    )
}
