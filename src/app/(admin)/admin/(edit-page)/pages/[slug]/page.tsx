"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, useFieldArray } from "react-hook-form";
import axiosClient from "@/libs/axiosClient";
import { useRouter, useParams } from "next/navigation";

const EditPage = () => {
	const { slug } = useParams();
	const router = useRouter();
	const queryClient = useQueryClient();

	interface Slice {
		name: string;
		heading: string;
		description: string;
		images: string[];
	}

	interface FormData {
		id: string;
		title: string;
		slug: string;
		slices: Slice[];
	}

	const { register, control, handleSubmit, setValue } = useForm<FormData>({
		defaultValues: {
			slices: [],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "slices",
	});

	const { isLoading, error } = useQuery<FormData, Error>({
		queryKey: ["pages", slug],
		queryFn: async () => {
			const response = await axiosClient.get(`/api/pages/${slug}`);
			return response.data;
		},
		onSuccess: (data: FormData) => {
			setValue("id", data.id);
			setValue("title", data.title);
			setValue("slug", data.slug);
			setValue("slices", data.slices || []);
		},
	});

	const mutation = useMutation({
		mutationFn: async (data: FormData) => {
			await axiosClient.put(`/api/pages/${data.id}`, data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["pages"] });
			router.push("/admin/pages");
		},
	});

	if (isLoading) return <div>Loading page...</div>;
	if (error)
		return <div>Error fetching page: {(error as Error).message}</div>;

	const onSubmit = (formData: FormData) => {
		mutation.mutate(formData);
	};

	return (
		<div className="max-w-4xl mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-6">Edit Page</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-6 bg-white p-6 shadow rounded-lg"
			>
				<input type="hidden" {...register("id")} />
				<div className="space-y-2">
					<label className="block text-sm font-medium text-gray-700">
						Title
					</label>
					<input
						{...register("title")}
						required
						className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Enter page title"
					/>
				</div>
				<div className="space-y-2">
					<label className="block text-sm font-medium text-gray-700">
						Slug
					</label>
					<input
						{...register("slug")}
						required
						className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Enter URL slug (e.g., landing-page)"
					/>
				</div>
				<div className="space-y-4">
					<label className="block text-sm font-medium text-gray-700">
						Slices
					</label>
					{fields.map((field, index) => (
						<div
							key={field.id}
							className="border border-gray-300 p-4 rounded-md shadow-sm bg-gray-50 space-y-4"
						>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Slice Name
								</label>
								<input
									{...register(`slices.${index}.name`)}
									required
									className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									placeholder="Enter slice name"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Heading
								</label>
								<input
									{...register(`slices.${index}.heading`)}
									className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									placeholder="Enter slice heading"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Description
								</label>
								<textarea
									{...register(`slices.${index}.description`)}
									className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									placeholder="Enter slice description"
								></textarea>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Images (Comma-separated URLs)
								</label>
								<input
									{...register(`slices.${index}.images`)}
									className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									placeholder="Enter image URLs (comma-separated)"
								/>
							</div>
							<button
								type="button"
								onClick={() => remove(index)}
								className="text-sm text-red-500 hover:underline"
							>
								Remove Slice
							</button>
						</div>
					))}
					<button
						type="button"
						onClick={() =>
							append({
								name: "",
								heading: "",
								description: "",
								images: [""],
							})
						}
						className="text-sm text-indigo-500 hover:underline"
					>
						Add Slice
					</button>
				</div>
				<button
					type="submit"
					className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Update Page
				</button>
			</form>
		</div>
	);
};

export default EditPage;
