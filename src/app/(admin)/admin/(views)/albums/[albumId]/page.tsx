"use client";

import { useState } from "react";
import { cn } from "@/libs/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import Share from "@/assets/share.svg";
import Tick from "@/assets/tick.svg";
import Edit from "@/assets/edit.svg";
import { Button } from "@/Components/Utilities/Buttons";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Album {
	album_id: string;
	album_name: string;
	album_description: string;
}

interface Photo {
	photo_id: string;
	photo_url: string;
}

interface AlbumData {
	album: Album;
	photos: Photo[];
}

export default function Album() {
	const { albumId } = useParams();
	const [isCopied, setIsCopied] = useState(false);
	const { data, isLoading, isError, isFetched } = useQuery<AlbumData>({
		queryKey: ["albums", albumId],
		queryFn: async () => {
			const { data: albumData } = await axios.get(
				`http://localhost:4000/album/${albumId}`
			);
			const { data: photosData } = await axios.get(
				`http://localhost:4000/album/${albumId}/photos`
			);
			return { album: albumData.album, photos: photosData.photos };
		},
		enabled: !!albumId, // Only run the query if albumId is available
	});

	const handleShare = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1500);
	};

	const url = `http://localhost:3000/admin/albums/${albumId}`;

	return (
		<div className="min-h-screen flex flex-col gap-5">
			<div className="w-full flex flex-col items-center justify-center">
				<div className="bg-black text-white w-full py-20 px-20 flex flex-col items-center justify-center gap-5">
					<h3 className="text-5xl font-afacad font-bold">
						{data?.album.album_name.replace(/-/g, " ")}
					</h3>
					<p className="text-lg font-raleway">
						{data?.album.album_description
							? data?.album.album_description
							: "No description available."}
					</p>
					<div
						className={cn(
							"w-full flex gap-4 justify-center items-center"
						)}
					>
						<CopyToClipboard text={url} onCopy={handleShare}>
							<Button
								variant={"outline"}
								className={cn("text-white",
                                    isCopied ? "bg-green-500 hover:bg-green-700" : "bg-black"
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
				<div className="flex p-10 items-center justify-between w-full">
					<div className="text-xl">View By:</div>
					<div>
						<select className="bg-white border border-black rounded p-2">
							<option value="table">List</option>
							<option value="grid">Grid</option>
						</select>
					</div>
				</div>
				<div className={cn("flex items-center justify-center w-full")}>
					{isLoading && <p>Loading...</p>}
					{isError && <p>Something went wrong...</p>}
					<div>
						{isFetched && (
							<div
								className={cn(
									"grid grid-rows-1 items-center justify-center p-5 gap-5"
								)}
							>
								{data?.photos.map((photo: Photo) => (
									<div
										className={cn("rounded-md w-full")}
										key={photo.photo_id}
									>
										<Image
											layout="responsive"
											width={100}
											height={100}
											src={photo.photo_url}
											alt={photo.photo_id}
										/>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
