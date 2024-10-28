import { Button } from "../Utilities/Buttons";
import ExternalLink from "@/assets/external-link.svg";
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

// const portraitGrids = [
//     {
//         id: 0,
//         imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/a14fd7c9-3239-4266-acc5-32d682e39daa_rw_1920.jpg?h=928414bc836b45c5e8981956d42fc0e3",
//     },
//     {
//         id: 1,
//         imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/5dfe1d4d-3f2e-412e-ad3d-92959502c51a_rw_1920.jpg?h=796d5523bbae5e2b4629252ffe142a2e",
//     },
//     {
//         id: 2,
//         imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/ae1eb989-8b73-4a16-aecf-cc6de1ed33f4_rw_1920.jpg?h=9c53f49961adde5183ee183253eb324c",
//     },
//     {
//         id: 3,
//         imgSrc: "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/cfa0a787-6aab-4d96-85c3-2be0cdb1d52c_rw_1920.jpg?h=b1c81beae1ee469eda6de6a1278423a7",
//     },
// ];

export default function LatestCaptures() {
	return (
		<div
			id="#myLatestCaptures"
			className="min-h-screen flex flex-col items-center justify-center gap-10 mt-20"
		>
			<div className="flex items-center justify-between w-full px-40">
				<h1 className="font-bold font-afacad text-6xl">
					My Latest Captures
				</h1>
				<Button variant="default" className="font-raleway font-bold">
					<span>View More</span>
					<span>
						<ExternalLink className="w-4 h-4 ml-2" />
					</span>
				</Button>
			</div>
			<div className="flex flex-col gap-10 items-center justify-center">
				<LandscapeSlides images={landscapeGrids} interval={5000} />
			</div>
		</div>
	);
}
