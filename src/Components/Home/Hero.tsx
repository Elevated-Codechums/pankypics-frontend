import { Button } from "../Utilities/Buttons";
import ImageSlider from "../Utilities/Sliders/ImageSlider";

export default function Hero() {
	const slides = [
		{
			imgSrc: "https://images.unsplash.com/photo-1728876027996-942383f8fe38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			imgSrc: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			imgSrc: "https://images.unsplash.com/photo-1729201958417-d729cf4b02b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <div className="absolute w-full h-full z-10">
                <ImageSlider
                    images={slides.map((slide) => slide.imgSrc)}
                    interval={5000}
                />
            </div>
            <div className="absolute w-full h-full bg-black bg-opacity-50 z-20 flex flex-col items-center justify-center gap-5">
                <h1 className="font-bold font-afacad min-[751px]:text-7xl min-[651px]:text-6xl text-4xl text-white z-30">
                    A Collection of Moments
                </h1>
                <p className="font-raleway min-[751px]:text-lg text-[1rem] text-white z-30">
                    Photography as a passion, not a Profession.
                </p>
                <Button variant="outline" size="lg" className="font-raleway min-[751px]:text-xl text-sm">
                    Explore My Gallery
                </Button>
            </div>
        </div>
    );
}
