import Image from "next/image";
import { useQuery } from "@tanstack/react-query"

export function Albums() {
	return (
		<div>
			<div>
				<h1>Albums Name</h1>
				<p>Description</p>
			</div>
			<div>
				<Image
					src="/images/album.jpg"
					alt="Album"
					width={300}
					height={300}
				/>
			</div>
		</div>
	);
}
