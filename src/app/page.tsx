import About from "@/Components/Home/About";
import AlbumSlider from "@/Components/Home/AlbumSlider";
import Contact from "@/Components/Home/Contact";
import CTA from "@/Components/Home/CTA";
import GridLayout from "@/Components/Home/GridLayout";
import Hero from "@/Components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <GridLayout />
      <AlbumSlider />
      <About />
      <CTA />
      <Contact />
    </div>
  );
}
