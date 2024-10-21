import About from "@/Components/Home/About";
import AlbumSlider from "@/Components/Home/AlbumSlider";
import Contact from "@/Components/Home/Contact";
import CTA from "@/Components/Home/CTA";
import LatestCaptures from "@/Components/Home/LatestCaptures";
import Hero from "@/Components/Home/Hero";

export default function Home() {


	return (
		<div>
			<Hero />
			<LatestCaptures />
			<AlbumSlider />
			<About />
			<CTA />
			<Contact />
		</div>
	);
}
