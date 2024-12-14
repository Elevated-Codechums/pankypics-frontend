"use client";

import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/libs/axiosClient";
import Link from "next/link";

const AdminPages = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["pages"],
		queryFn: async () => {
			const response = await axiosClient.get("/api/pages");
			return response.data;
		},
	});

	if (isLoading)
		return <div className="text-center text-lg">Loading pages...</div>;
	if (error)
		return (
			<div className="text-center text-lg text-red-500">
				Error fetching pages: {(error as Error).message}
			</div>
		);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Pages</h1>
			<Link href="/admin/pages/page" className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
					Create New Page
			</Link>
			<table className="min-w-full bg-white border border-gray-200">
				<thead>
					<tr>
						<th className="px-4 py-2 border-b">Title</th>
						<th className="px-4 py-2 border-b">Slug</th>
						<th className="px-4 py-2 border-b">Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.map(
						(page: { id: string; title: string; slug: string }) => (
							<tr key={page.id} className="hover:bg-gray-100">
								<td className="px-4 py-2 border-b">
									{page.title}
								</td>
								<td className="px-4 py-2 border-b">
									{page.slug}
								</td>
								<td className="px-4 py-2 border-b">
									<Link href={`/admin/pages/${page.slug}`} className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
										Edit
									</Link>
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default AdminPages;
