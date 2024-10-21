import { Button } from "../Utilities/Buttons";
import ExternalLink from "@/assets/external-link.svg";
import PhotoGrid from "../Utilities/Grids/PhotoGrid";

const imagesGrids = [
	{
		type: "none",
		images: [
            {
                landscapeGroup: [
                    {
                        landscapeId: 0,
                        imgSrc:
                            "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27",
                        imageCaption: "Image 1",
                    },
                    {
                        landscapeId: 1,
                        imgSrc:
                            "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27",
                        imageCaption: "Image 2",
                    },
                ],
                potrait : {
                    potraitId: 0,
                    imgSrc:
                        "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/cfa0a787-6aab-4d96-85c3-2be0cdb1d52c_rw_1920.jpg?h=b1c81beae1ee469eda6de6a1278423a7",
                    imageCaption: "Image 3",
                }
            },
		],
	},
    {
		type: "reversed",
		images: [
            {
                landscapeGroup: [
                    {
                        imgId: 0,
                        imgSrc:
                            "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27",
                        imageCaption: "Image 1",
                    },
                    {
                        imgId: 1,
                        imgSrc:
                            "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27",
                        imageCaption: "Image 2",
                    },
                ],
                potrait : {
                    imgId: 2,
                    imgSrc:
                        "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/cfa0a787-6aab-4d96-85c3-2be0cdb1d52c_rw_1920.jpg?h=b1c81beae1ee469eda6de6a1278423a7",
                    imageCaption: "Image 3",
                }
            },
		],
	},
    {
		type: "none",
		images: [
            {
                landscapeGroup: [
                    {
                        imgId: 0,
                        imgSrc:
                            "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27",
                        imageCaption1: "Image 1",
                    },
                    {
                        imgId: 1,
                        imgSrc:
                            "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27",
                        imageCaption: "Image 2",
                    },
                ],
                potrait : {
                    imgId: 2,
                    imgSrc:
                        "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/cfa0a787-6aab-4d96-85c3-2be0cdb1d52c_rw_1920.jpg?h=b1c81beae1ee469eda6de6a1278423a7",
                    imageCaption: "Image 3",
                }
            },
		],
	},
];

export default function LatestCaptures() {
	return (
		<div id="#myLatestCaptures" className="min-h-screen flex flex-col items-center justify-center gap-10 mt-20">
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
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
                {
                    imagesGrids.map((imageGrid:any, index:number) => (
                        <PhotoGrid key={index} images={imageGrid.images} type={imageGrid.type} />
                    ))
                }
			</div>
		</div>
	);
}
