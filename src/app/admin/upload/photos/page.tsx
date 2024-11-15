"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import axios from "axios";
import { Button } from "@/Components/Utilities/Buttons";
import { cn } from "@/libs/utils";
import { useState } from "react";
import Image from "next/image";
import Upload from "@/assets/upload.svg";
import { useDropzone } from "react-dropzone";
import Cross from "@/assets/cross.svg";
import ChevronUp from "@/assets/chevron-up.svg";
import ChevronDown from "@/assets/chevron-down.svg";
import { motion, AnimatePresence } from "framer-motion";
import useScrollState from "@/Hooks/useScrollState";

type FormValues = {
	albumName: string;
	albumDescription: string;
	file: FileList;
};

export default function Photos() {
	const { register, handleSubmit, formState, reset, watch } =
		useForm<FormValues>();
	const albumName = watch("albumName");
	const albumDescription = watch("albumDescription");
	const { errors } = formState;

	const isScrolled = useScrollState();

	const [previewImages, setPreviewImages] = useState<string[]>([]);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [collapsed, setCollapsed] = useState(false);

	const mutation = useMutation({
		mutationFn: async (formData: FormValues) => {
			const data = new FormData();
			data.append("albumName", formData.albumName);
			data.append("albumDescription", formData.albumDescription);

			selectedFiles.forEach((file) => {
				data.append("photos", file);
			});

			const response = await axios.post(
				"http://localhost:4000/album/upload/photos",
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

	const onSubmit = (data: FormValues) => {
		mutation.mutate(data);
	};

	const onErrors = (errors: FieldErrors<FormValues>) => {
		console.log("Form Errors", errors);
	};

	const onDrop = (acceptedFiles: File[]) => {
		const mergedFiles = [...selectedFiles, ...acceptedFiles];
		setSelectedFiles(mergedFiles);

		const newPreviews = acceptedFiles.map((file) =>
			URL.createObjectURL(file)
		);
		setPreviewImages([...previewImages, ...newPreviews]);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/png": [],
			"image/jpg": [],
			"image/jpeg": [],
		},
	});

	const handleRemoveImage = (index: number) => {
		const newPreviewImages = previewImages.filter((_, i) => i !== index);
		const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);
		setPreviewImages(newPreviewImages);
		setSelectedFiles(newSelectedFiles);
	};

	const handleCollapse = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div className="select-none">
			<div
				className={cn("fixed z-50 top-11 left-0 flex flex-col w-full")}
			>
				<AnimatePresence initial={false}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className={cn(
							"bg-black text-white p-6 backdrop-blur-md",
							{
								"bg-opacity-70 backdrop-blur-sm": isScrolled,
							}
						)}
					>
						{collapsed ? (
							<div
								onClick={handleCollapse}
								className="cursor-pointer"
							>
								<div className="flex items-center justify-between w-full">
									<h1 className="text-3xl font-bold mb-2 break-words">
										{albumName || "Untitled Album"}
									</h1>
									<button>
										<ChevronDown />
									</button>
								</div>
							</div>
						) : (
							<div
								onClick={handleCollapse}
								className="cursor-pointer"
							>
								<div className="flex items-center justify-between w-full">
									<h1 className="text-3xl font-bold mb-2 break-words">
										{albumName || "Untitled Album"}
									</h1>
									<button>
										<ChevronUp />
									</button>
								</div>
							</div>
						)}
						{!collapsed && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
							>
								<div>
									<p className="break-words">
										{albumDescription ||
											"No description provided"}
									</p>
								</div>

								<div>
									{previewImages.length > 0 && (
										<p>
											{selectedFiles.length} file(s)
											selected
										</p>
									)}

									{previewImages.length > 0 && (
										<p>Preview:</p>
									)}
								</div>

								<div className="flex gap-4 w-full mt-4 overflow-x-auto">
									{previewImages.map((src, index) => (
										<motion.div
											key={index}
											className="relative flex-shrink-0"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.8 }}
										>
											<Image
												width={160}
												height={90}
												src={src}
												alt={`Preview ${index}`}
												className="object-cover rounded-md"
												onContextMenu={(e) =>
													e.preventDefault()
												}
											/>
											<button
												type="button"
												onClick={() =>
													handleRemoveImage(index)
												}
												className="absolute top-0 right-0 text-white p-2"
											>
												<Cross />
											</button>
										</motion.div>
									))}
								</div>
							</motion.div>
						)}
					</motion.div>
				</AnimatePresence>
			</div>
			<div
				className={cn(
					"flex flex-col items-center justify-center min-h-screen w-full"
				)}
			>
				<div className="flex flex-col items-center justify-center gap-2 bg-black w-[70%] text-white p-5 rounded-md rounded-b-none ">
					<h1 className="text-4xl font-bold">Make a new Album</h1>
					<p>
						Please provide a name and description for your album and add photos to it
					</p>
				</div>
				<form
					className="flex flex-col w-[70%] p-4 border border-gray-300 rounded-t-none rounded-md space-y-4"
					onSubmit={handleSubmit(onSubmit, onErrors)}
				>
					<label>Album Name</label>
					<input
						className="border border-gray-300 w-full rounded-md p-1 focus:outline-none"
						type="text"
						{...register("albumName", {
							required: true,
							setValueAs: (value) => value.replace(/\s+/g, "-"),
						})}
					/>

					<label>Album Description</label>
					<textarea
						className="border border-gray-300 w-full rounded-md p-1 focus:outline-none"
						{...register("albumDescription", {
							required: true,
							minLength: {
								value: 10,
								message:
									"Description must be at least 10 characters",
							},
						})}
					/>

					<label>Add Photos</label>
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
							<p>Drop the files here...</p>
						) : (
							<p className="flex flex-col items-center justify-center gap-4">
								<span>
									<Upload />
								</span>
								Drag and drop files here, or click to select
								files
							</p>
						)}
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
						{errors.albumName && (
							<p className="text-red-500">
								{errors.albumName.message}
							</p>
						)}

						{errors.albumDescription && (
							<p className="text-red-500">
								{errors.albumDescription.message}
							</p>
						)}

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
