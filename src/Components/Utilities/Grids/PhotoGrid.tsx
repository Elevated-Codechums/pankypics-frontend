"use client";

import { cn } from "@/libs/utils";
import Image from "next/image";

interface ImageProps {
	potrait: {
        potraitId: number;
		imgSrc: string;
		imageCaption?: string;
	};
	landscapeGroup: {
        landscapeId: number;
		imgSrc: string;
		imageCaption?: string;
	};
}

interface GridLayoutProps {
	images: ImageProps[];
	type: string;
}

export default function PhotoGrid({ images, type }: GridLayoutProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-center gap-5",
				type === "reversed" ? "flex-col-reverse" : "flex-col"
			)}
		>
			<div className="flex flex-col items-center justify-center gap-5">
				{images.map((image) => {
					return (
						<Image
							key={image.landscapeGroup.landscapeId}
							src={image.landscapeGroup.imgSrc || "https://cdn.myportfolio.com/37617585-de9b-43dd-9ca3-2837cbfa4d71/82e4a2e1-231e-45b2-a95a-a2d5f7f51183_rw_1920.jpg?h=b074c795841caca582253a80823dbf27"}
							alt={image.landscapeGroup.imageCaption || "Image 1"}
							layout="responsive"
							width={500}
							height={500}
							className="w-full h-auto object-cover rounded-lg shadow-md"
						/>
					);
				})}
			</div>
			<div>
				{images.map((image, index) => {
					return (
						<Image
							key={image.potrait.potraitId}
							src={image.potrait.imgSrc}
							alt={image.potrait.imageCaption || ""}
							layout="responsive"
							width={500}
							height={500}
							className="w-full h-auto object-cover rounded-lg shadow-md"
						/>
					);
				})}
			</div>
		</div>
	);
}
