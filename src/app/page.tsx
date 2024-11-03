import About from "@/Components/Home/About";
import AlbumSlider from "@/Components/Home/AlbumSlider";
import Contact from "@/Components/Home/Contact";
import LatestCaptures from "@/Components/Home/LatestCaptures";
import Hero from "@/Components/Home/Hero";
import Linkedin from "@/assets/linkedin.svg";
import Email from "@/assets/e-mail.svg";
import Instagram from "@/assets/instagram.svg";
import X from "@/assets/x.svg";
import LandingCTA from "@/Components/Home/LandingCTA";

const Links = [
	{
		id: 0,
		buttonText: "Email",
		buttonSVG: <Email />,
		buttonLink: "",
	},

	{
		id: 1,
		buttonText: "Instagram",
		buttonSVG: <Instagram />,
		buttonLink: "",
	},
	{
		id: 2,
		buttonText: "LinkedIn",
		buttonSVG: <Linkedin />,
		buttonLink: "",
	},
	{
		id: 3,
		buttonText: "X",
		buttonSVG: <X />,
		buttonLink: "",
	},
];

export default function Home() {
	return (
		<div>
			<Hero />
			<LatestCaptures
				heading="My Latest Captures"
				buttonText="View More"
			/>
			<AlbumSlider
				heading="My Albums"
				buttonText="View More"
				buttonLink="album"
				reverse
			/>
			<About
				heading="About Me"
				buttonLink="about"
				buttonText="More About Me"
			/>
			<LandingCTA />
			<Contact
				heading="Let's Connect"
				buttonLink=""
				buttonText=""
				additionalButtonInfo={Links}
				additionalButtons={true}
				buttonSVG={Links.map((link) => {
					return link.buttonSVG;
				})}
			/>
		</div>
	);
}
