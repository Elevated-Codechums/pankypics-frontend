import Image from "next/image"

export default function LastCaptures(){
    return(
        <div className='h-screen flex justify-center items-center bg-backgroundwhite '>
                <div className='h-[90%] w-[94%] bg-darkbrown rounded-3xl gap-[200px] flex  flex-col'>
                <h1 className=' justify-center text-7xl ml-[60px] mt-[50px] text-headtext  h-[100px]   font-bold'>My Latest Captures</h1>
                    <div className='h-[45%] w-[90%] ml-[50px] mt-[-145px] bg-backgroundwhite rounded-3xl flex flex-row gap-5  '>
                    <div className='rounded-3xl flex flex-row gap-6 ml-[100px] align-center justify-center items-center'>    
                        <Image 
                        
                        src="https://images.unsplash.com/photo-1618945525824-083e36be3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8"
                        height={0}
                        width={250}
                        alt=''
                        
                        />

                        <Image 

                        src="https://plus.unsplash.com/premium_photo-1725408115671-b67df9364179?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
                        height={50}
                        width={250}
                        alt=''
                        
                        />
                        
                        <Image 
                        
                        src="https://images.unsplash.com/photo-1731370963500-b836d108f7c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D"
                        height={50}
                        width={250}
                        alt=''

                        />

                        <Image

                        src= "https://images.unsplash.com/photo-1733398378174-a8f3b1559451?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTV8fHxlbnwwfHx8fHw%3D"
                        height={50}
                        width={250}
                        alt=''
                        
                        />

                    </div>
                        
                            
                    </div>
                </div>
            </div>
    )
}