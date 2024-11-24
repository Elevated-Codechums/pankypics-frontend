"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { cn } from "@/libs/utils";
import { Button } from "@/Components/Utilities/Buttons";
import Share from "@/assets/share.svg";
import Tick from "@/assets/tick.svg";
import Edit from "@/assets/edit.svg";

interface Photo {
	photo_id: string;
	album_id: string;
	photo_url: string;
}

interface PhotoResponse {
	message: string;
	photo: Photo;
}

export default function Photo() {
	const { albumId, photoId } = useParams();
	const [isCopied, setIsCopied] = useState(false);
	const { data, isLoading, isError, isFetched } = useQuery<PhotoResponse>({
		queryKey: ["photos", albumId, photoId],
		queryFn: async () => {
			const { data } = await axios.get(
				`http://localhost:4000/album/${albumId}/photo/${photoId}`
			);
			return data;
		},
		enabled: !!albumId && !!photoId,
	});

	const photo = data?.photo;
	const handleShare = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1500);
	};

	const url = `http://localhost:3000/admin/albums/${albumId}`;

	return (
		<div>
			<div className="bg-black fixed top-0 left-0 z-40 text-white w-full mt-11 py-6 px-10 flex items-center justify-between">
				<div className="">
					<h1 className="text-3xl font-raleway font-bold">Photo</h1>
				</div>
				<div
					className={cn(
						"flex gap-4 justify-center items-center"
					)}
				>
					<CopyToClipboard text={url} onCopy={handleShare}>
						<Button
							variant={"outline"}
							className={cn(
								"text-white",
								isCopied
									? "bg-green-500 hover:bg-green-700"
									: "bg-black"
							)}
						>
							{isCopied ? (
								<div>
									<span>
										<Tick />
									</span>
								</div>
							) : (
								<div className="flex items-center justify-center gap-3">
									<span>
										<Share />
									</span>
								</div>
							)}
						</Button>
					</CopyToClipboard>
					<Button variant={"outline"} className="text-white">
						<Edit />
					</Button>
				</div>
			</div>
			<div className="min-h-screen flex flex-col gap-5">
				{isError && <div>Error fetching photo</div>}
				{isLoading && <div>Loading...</div>}
				{isFetched && photo && (
					<div className="flex flex-col items-center gap-5 w-full h-full">
						<Image
							layout="fill"
							objectFit="contain"
							src={photo.photo_url}
							alt="Photo"
							className="w-full h-full"
						/>
					</div>
				)}
			</div>
			<div></div>
		</div>
	);
}
