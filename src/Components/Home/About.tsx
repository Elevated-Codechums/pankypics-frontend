import Image from "next/image"

export default function About(){
    return(
        <div className='h-screen flex justify-center items-center bg-backgroundwhite '>
        <div className='h-[90%] w-[94%] bg-darkbrown rounded-3xl gap-[200px] flex flex-col'>
            <div className='flex gap-[9rem] felx-row'>
                <h1 className=' justify-center text-7xl ml-[110px] mt-[50px] text-headtext mt-[9rem]  h-[100px]  font-bold'>About Me</h1>
                <h1 className=' w-[590px]  text-xl mt-[5rem] font-bold text-headtext h-[200px]'> Obcaecati est quidem amet quos, odio blanditiis? Expedita eveniet aliquid inventore at eius qui sit sapiente est?Figma ipsum component variant main layer. Vector rotate ipsum strikethrough bullet content inspect clip union. Pen arrange subtract hand flows r Select figjam pen asset group inspect horizontal figma. Arrange arrange effect slice duplicate frame layer hand clip vertical. Font hand share flatten variant.</h1>    
            </div>    
        
            <div className='h-[224px]  bg-red-700 w-100'>
            <Image className=" flex items-center justify-center w-full"
            
            src="https://images.unsplash.com/photo-1626052241456-2cfbd6a227dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8"
            alt=''
            height={500}
            width={305}
            />
            </div>
        </div>
    </div>
    )
}