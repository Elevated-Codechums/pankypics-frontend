import { SectionTitle } from "../Utilities/Headings/SectionTitle";
import { LandscapeSlides } from "../Utilities/Slides/Slides";

const landscapeGrids = [
	{
		id: 0,
		imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27",
	},
	{
		id: 1,
		imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/cc46ae0e-dc02-4449-b435-0579aa138b64_rw_1920.jpg?h=a52f2a3b333735b75832b970460756b0",
	},
	{
		id: 2,
		imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/94f0a2e0-0d8d-40e3-825f-9265c5fac289_rw_1920.jpg?h=ca90ec072eaf9b693013326cb6e19fc3",
	},
    {
        id: 3,
        imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/45d94984-b0ad-4378-b2c9-7a835fdaa8e4_rw_1920.jpg?h=7cbc58c7c4ade16917e60a02f2671e12",
    },
    {
        id: 4,
        imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/d473b0e3-7c50-42a4-8b03-9025ab170062_rw_1920.jpg?h=844d6beae61a3f28962cf7565a9486ba",
    },
    {
        id: 5,
        imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/84c7eeb2-36a9-4b7c-83c9-0372431cedd8_rw_1920.jpg?h=7e7fdaf2d78d6f897338eeb09a131c8b",
    }
];

interface LatestCapturesProps {
    heading: string;
    buttonText: string;
}


export default function LatestCaptures(
    { heading, buttonText }: LatestCapturesProps
) {
	return (
		<div
			id="#myLatestCaptures"
			className="min-h-screen flex flex-col items-center gap-10 mt-20"
		>
            <SectionTitle heading={heading} buttonText={buttonText} buttonLink="latest-captures" />
            
			<div className="flex flex-col gap-10 items-center justify-center">
				<LandscapeSlides images={landscapeGrids} interval={5000} />
			</div>
		</div>
	);
}
