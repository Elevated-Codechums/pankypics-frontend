import Image from "next/image"


export default function Album(){
    return(
        <div className='h-screen flex justify-center items-center bg-backgroundwhite '>
                        <div className='h-[90%] w-[94%] bg-darkbrown rounded-3xl flex '>
                            <h1 className=' justify-center text-7xl ml-[60px] mt-[50px] text-headtext  h-[100px]  font-bold'>Some of My Albums</h1>
                            <div className='flex flex-row  h-[20rem] mt-[250px]  justify-center items-center  w-[20rem]'>
                                <div className='text-3xl  ml-[-550px] flex flex-col font-bold text-headtext'>
                                
                                <a href="#">.Portrait</a><br />
                                <a href='#'>.Landscope</a><br/>
                                <a href='#'>.Wildlife</a><br/>
                                <a href='#'>.Candid</a><br/>
                                </div>
                                <div className='flex gap-4 ml-[100px] flex-row'>
                                    <Image
                                    
                                    src="https://images.unsplash.com/photo-1733919504972-4486ea3ddc89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D"
                                    height={60}
                                    width={300}
                                    alt=''
                                    
                                    />
                                    
                                    <Image
                                    
                                    src="https://images.unsplash.com/photo-1729731322082-c0a7c32229aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
                                    height={60}
                                    width={300}
                                    alt=''/>
                                    
                                    <Image
        
                                    src="https://images.unsplash.com/photo-1729731322911-2635f53bb7e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
                                    height={60}
                                    width={300}
                                    alt=''/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
    )
}