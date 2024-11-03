"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import axios from "axios";
import { Button } from "@/Components/Utilities/Buttons";
import { cn } from "@/libs/utils";
import { DevTool } from "@hookform/devtools";

// Move FormValues type outside of the component for clarity
type FormValues = {
	albumName: string;
	file: FileList;
};

export default function FileUpload() {
	const { register, handleSubmit, formState, reset, control, watch } =
		useForm<FormValues>();
	const albumName = watch("albumName");
	const { errors } = formState;

	const mutation = useMutation({
		mutationFn: async (formData: FormValues) => {
			const data = new FormData();
			data.append("photo", formData.file[0]);
			data.append("albumName", formData.albumName);

			const response = await axios.post(
				"http://localhost:4000/upload/photo",
				data,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			return response.data;
		},
		onSuccess: () => {
			console.log("File uploaded successfully");
			reset();
		},
		onError: (error: unknown) => {
			console.error("Error uploading file", error);
		},
	});

	const onSubmit = (data: FormValues) => {
		mutation.mutate(data);
	};

	const onErrors = (errors: FieldErrors<FormValues>) => {
		console.log("Form Errors", errors);
	};

	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center min-h-screen gap-4"
			)}
		>
			<div>
				<h1 className="text-3xl font-bold font-afacad">
					<span>New Album</span> {" : "}
					<span>{albumName || "Untitled"}</span>{" "}
				</h1>
			</div>
			<form
				className={cn(
					"flex flex-col",
					"font-raleway",
					"space-y-4",
					"w-[50%]",
					"p-4",
					"border border-gray-300",
					"rounded-md"
				)}
				onSubmit={handleSubmit(onSubmit, onErrors)}
			>
				<div className={cn("flex justify-between", "space-y-1")}>
					<label htmlFor="albumName">Album Name</label>
					<span>
						{errors.albumName && (
							<p className="font-bold text-red-500">
								{errors.albumName.message}
							</p>
						)}
					</span>
				</div>

				<input
					className={cn(
						"border border-gray-300",
						"focus:outline-none focus:ring focus:ring-gray-300",
						"w-full",
						"rounded-md p-1"
					)}
					type="text"
					{...register("albumName", {
						required: true,
						// validate the album name where no spaces are allowed
						pattern: {
							value: /^[^\s]+$/,
							message: "Album name cannot contain spaces",
						}
					})}
				/>
					<input
						type="file"
						className={cn(
							"border border-gray-300",
							"focus:outline-none focus:ring focus:ring-gray-300",
							"w-full",
							"rounded-md px-4 py-5"
						)}
						{...register("file", { 
							required: true,
							pattern: {
								value: /image\/(png|jpg|jpeg)/,
								message: "Invalid file type. Only png, jpg, jpeg files are allowed",
							},
						})}
					/>
				<div>
					{errors.file && (
						<p className="font-bold text-red-500">
							{errors.file.message}
						</p>
					)}
				</div>

				<Button type="submit" disabled={mutation.isPending}>
					{mutation.isPending ? "Uploading..." : "Upload"}
					{mutation.isSuccess && "ed"}
				</Button>

				{mutation.isError && (
					<p className="text-red-500">
						Error uploading file:{" "}
						{(mutation.error as Error).message}
					</p>
				)}
				{mutation.isSuccess && (
					<p className="text-green-500">File uploaded successfully</p>
				)}
			</form>
			<DevTool control={control} />
		</div>
	);
}
