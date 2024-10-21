import ImageSlider from "../Utilities/Sliders/ImageSlider"

export default function Hero() {

    const slides = [
        {
            imgSrc: "https://images.unsplash.com/photo-1728876027996-942383f8fe38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1729201958417-d729cf4b02b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]



    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <div className="absolute w-full h-full z-10">
                <ImageSlider images={slides.map(slide => slide.imgSrc)} interval={5000} />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
            </div>
            <h1 className="font-bold font-afacad text-white text-7xl z-20">A Collection of Moments</h1>
        </div>
    )
}