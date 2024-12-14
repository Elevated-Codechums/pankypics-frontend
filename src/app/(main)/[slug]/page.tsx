"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import axiosClient from "@/libs/axiosClient";
import Image from "next/image";

const PageBySlug = () => {
	const { slug } = useParams();

	const { data, isLoading, error } = useQuery({
		queryKey: [slug],
		queryFn: async () => {
			const response = await axiosClient.get(`/api/pages/${slug}`);
			return response.data;
		},
		enabled: !!slug, // Only fetch if slug is defined
	});

	if (isLoading) return <div>Loading page...</div>;
	if (error)
		return <div>Error fetching page: {(error as Error).message}</div>;

	const { title, slices } = data;

	return (
		<div>
			<h1>{title}</h1>
			{slices.map(
				(
					slice: {
						heading: string;
						description: string;
						img: string;
					},
					index: number
				) => (
					<section key={index}>
						<h2>{slice.heading}</h2>
						<p>{slice.description}</p>
						<Image
							key={index}
							src={slice.img}
							alt={`Slice image ${index}`}
							width={500}
							height={300}
						/>
					</section>
				)
			)}
		</div>
	);
};

export default PageBySlug;
