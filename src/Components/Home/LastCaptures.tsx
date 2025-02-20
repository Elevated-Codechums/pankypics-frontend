import Image from "next/image";

export default function LastCaptures() {
    return (
        <div className=" flex justify-center items-center bg-backgroundwhite">
            <div className="h-full w-[94%] bg-darkbrown rounded-3xl flex flex-col gap-8 p-6 md:p-12">
                <h1 className="text-center text-3xl md:text-5xl lg:text-7xl text-headtext font-bold">
                    My Latest Captures
                </h1>
                <div className="flex flex-wrap h-full justify-center gap-4 md:gap-6">
                    <Image
                        src="https://images.unsplash.com/photo-1618945525824-083e36be3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8"
                        height={250}
                        width={250}
                        alt=""
                        className="rounded-3xl"
                    />
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1725408115671-b67df9364179?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
                        height={250}
                        width={250}
                        alt=""
                        className="rounded-3xl"
                    />
                    <Image
                        src="https://images.unsplash.com/photo-1731370963500-b836d108f7c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D"
                        height={250}
                        width={250}
                        alt=""
                        className="rounded-3xl"
                    />
                    <Image
                        src="https://images.unsplash.com/photo-1733398378174-a8f3b1559451?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTV8fHxlbnwwfHx8fHw%3D"
                        height={250}
                        width={250}
                        alt=""
                        className="rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
}
