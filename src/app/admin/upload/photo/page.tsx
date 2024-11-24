"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import axios from "axios";
import { Button } from "@/Components/Utilities/Buttons";
import { cn } from "@/libs/utils";
import { useState } from "react";
import Image from "next/image";
import Cross from "@/assets/cross.svg";
import Upload from "@/assets/upload.svg";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

type FormValues = {
	file: FileList;
};

export default function Photos() {
	const { handleSubmit, reset } = useForm<FormValues>();

	const [previewImages, setPreviewImages] = useState<string[]>([]);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

	const mutation = useMutation({
		mutationFn: async () => {
			const data = new FormData();

			selectedFiles.forEach((file) => {
				data.append("photos", file);
			});

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
			console.log("Files uploaded successfully");
			reset();
			setPreviewImages([]);
			setSelectedFiles([]);
		},
		onError: (error: unknown) => {
			console.error("Error uploading files", error);
		},
	});

	const onSubmit = () => {
		mutation.mutate();
	};

	const onErrors = (errors: FieldErrors<FormValues>) => {
		console.log("Form Errors", errors);
	};

	const onDrop = (acceptedFiles: File[]) => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			setSelectedFiles([file]);
			setPreviewImages([URL.createObjectURL(file)]);
		}
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/png": [],
			"image/jpg": [],
			"image/jpeg": [],
		},
		maxFiles: 1,
	});

	const handleRemoveImage = () => {
		setPreviewImages([]);
		setSelectedFiles([]);
	};

	return (
		<div>
			<div
				className={cn(
					"flex flex-col items-center justify-center min-h-screen"
				)}
			>
				<div className="flex flex-col items-center justify-center gap-2 bg-black w-[70%] text-white p-5 rounded-md rounded-b-none ">
					<h1 className="text-4xl font-bold">Add a Photo</h1>
					<p>
						Quickly add a photo to your website by uploading it here.
					</p>
				</div>
				<form
					className="flex flex-col w-[70%] p-4 border border-gray-300 rounded-t-none rounded-md space-y-4"
					onSubmit={handleSubmit(onSubmit, onErrors)}
				>
					<label>Add Photo</label>
					<div
						{...getRootProps()}
						className={cn(
							"border border-gray-300 w-full rounded-md px-4 py-5 flex items-center justify-center transition-colors duration-200",
							isDragActive
								? "bg-gray-200 border-dashed"
								: "bg-white"
						)}
					>
						<input {...getInputProps()} />
						{isDragActive ? (
							<p>Drop the file here...</p>
						) : (
							<p className="flex flex-col items-center justify-center gap-4">
								<span>
									<Upload />
								</span>
								Drag and drop a file here, or click to select a
								file
							</p>
						)}
					</div>

					{previewImages.length > 0 && <p>Preview:</p>}

					<div className="flex items-center justify-center gap-4 w-full mt-4 overflow-x-auto">
						{previewImages.map((src, index) => (
							<motion.div
								key={index}
								className="relative flex-shrink-0 w-full"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
							>
								<Image
									width={360}
									height={180}
									src={src}
									alt={`Preview ${index}`}
									className="object-cover rounded-md w-full"
									onContextMenu={(e) => e.preventDefault()}
								/>
								<button
									type="button"
									onClick={handleRemoveImage}
									className="absolute top-0 right-0 text-white p-2"
								>
									<Cross />
								</button>
							</motion.div>
						))}
					</div>
				</form>
			</div>
			<div className="sticky z-50 bottom-0 left-0 flex flex-col w-full bg-black p-5">
				<form
					onSubmit={handleSubmit(onSubmit, onErrors)}
					className={cn(
						"flex items-center justify-between flex-row-reverse"
					)}
				>
					<Button
						variant={"outline"}
						type="submit"
						disabled={mutation.isPending}
					>
						{mutation.isPending ? "Uploading..." : "Upload"}
					</Button>
					<div>
						{mutation.isError && (
							<p className="text-red-500">
								Error uploading files:{" "}
								{(mutation.error as Error).message}
							</p>
						)}
						{mutation.isSuccess && (
							<p className="text-green-500">
								Files uploaded successfully!
							</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
