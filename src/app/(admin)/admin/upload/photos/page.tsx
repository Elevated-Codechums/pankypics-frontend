"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import { Button } from "@/Components/Utilities/Buttons";
import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import CircleCross from "@/assets/circle-cross.svg";
import CirclePlus from "@/assets/circle-plus.svg";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Input } from "@/Components/Utilities/Inputs";
import axiosClient from "@/libs/axiosClient";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

type FormValues = {
	albumName: string;
	albumDescription: string;
	photoCaptions: string[];
	file: FileList;
};

export default function Photos() {
	const router = useRouter();

	const [authChecked, setAuthChecked] = useState(false);
	const [isPublic, setIsPublic] = useState(false);
	const [shareableLink, setShareableLink] = useState(""); // State for the shareable link

	const { isCheckingAuth, checkAuth, isAuthenticated } = useAuthStore();

	useEffect(() => {
		if (!authChecked) {
			const verifyAuth = async () => {
				await checkAuth();
				setAuthChecked(true); // Mark as checked after the first run
			};
			verifyAuth();
		}

		if (isCheckingAuth) {
			return;
		}

		if (authChecked && isAuthenticated) {
			router.replace("/admin/upload/photos"); // Redirect if authenticated
		}
	}, [authChecked, checkAuth, isAuthenticated, router]);

	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [previewImages, setPreviewImages] = useState<string[]>([]);
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		getValues,
		formState: { errors },
	} = useForm<FormValues>();

	const mutation = useMutation({
		mutationFn: async (formData: FormValues) => {
			const data = new FormData();
			data.append("albumName", formData.albumName);
			data.append("albumDescription", formData.albumDescription);
			data.append("isPublic", String(isPublic)); // Include the public/private flag

			selectedFiles.forEach((file, index) => {
				data.append("photos", file);
				data.append("photoCaptions", formData.photoCaptions[index]);
			});

			const response = await axiosClient.post(
				"album/upload/photos",
				data,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			return response.data;
		},
		onSuccess: (data) => {
			console.log("Files uploaded successfully", data);
			reset();
			setPreviewImages([]);
			setSelectedFiles([]);
			setShareableLink(`https://yourdomain.com/share/${data.shareToken}`); // Set the shareable link
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

		const newCaptions = new Array(acceptedFiles.length).fill("");
		setValue("photoCaptions", [
			...getValues("photoCaptions"),
			...newCaptions,
		]);
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
		const newCaptions = getValues("photoCaptions").filter(
			(_, i) => i !== index
		);
		setPreviewImages(newPreviewImages);
		setSelectedFiles(newSelectedFiles);
		setValue("photoCaptions", newCaptions);
	};

	return (
		<div className={cn("flex items-center min-h-screen gap-4 py-20 ")}>
			<form
				className="flex flex-col w-full p-5 bg-black text-white rounded-xl gap-4"
				onSubmit={handleSubmit(onSubmit, onErrors)}
			>
				<div className="text-center">
					<h1 className="text-4xl font-bold">Create a New Album</h1>
				</div>
				<label htmlFor="albumName">Album Name</label>
				<Input
					type="text"
					{...register("albumName", { required: true })}
				/>
				<label htmlFor="albumDescription">Album Description</label>
				<Input
					type="text"
					{...register("albumDescription", {
						required: true,
						minLength: 10,
					})}
				/>
				<div className="flex items-center">
					<label htmlFor="isPublic" className="mr-2">
						Make Album Public
					</label>
					<input
						type="checkbox"
						id="isPublic"
						checked={isPublic}
						onChange={(e) => setIsPublic(e.target.checked)}
					/>
				</div>
				<div
					{...getRootProps()}
					className={cn(
						"flex items-center justify-center w-full p-5 border rounded-md",
						isDragActive
							? "border-dashed bg-gray-700"
							: "bg-gray-800"
					)}
				>
					<input {...getInputProps()} />
					{isDragActive ? (
						<p>Drop the files here...</p>
					) : (
						<p className="flex flex-col items-center gap-4">
							<CirclePlus />
							Drag and drop files, or click to select
						</p>
					)}
				</div>
			</form>
			<div className="flex flex-wrap gap-4 overflow-y-auto max-h-96">
				{previewImages.length > 0 && (
					<h2 className={cn("text-3xl")}>Preview:</h2>
				)}

				{previewImages.map((src, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-4 w-full mt-4 overflow-x-auto bg-black p-4 rounded-xl"
					>
						<motion.div
							className="relative flex-shrink-0 w-48 h-48"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
						>
							<Image
								width={192}
								height={192}
								src={src}
								alt={`Preview ${index}`}
								className="object-cover rounded-md w-full h-full"
								onContextMenu={(e) => e.preventDefault()}
							/>
							<button
								type="button"
								onClick={() => handleRemoveImage(index)}
								className="absolute top-0 right-0 text-white p-2"
							>
								<CircleCross className={cn("text-red-500")} />
							</button>
						</motion.div>
						<Input
							type="text"
							placeholder="Enter caption"
							className="w-full mt-2"
							{...register(`photoCaptions.${index}`)}
						/>
					</div>
				))}
			</div>
			<div className="fixed z-50 bottom-0 left-0 mb-10 flex flex-col items-center w-full mt-4">
				{shareableLink && (
					<div className="mt-4">
						<p className="text-green-500">
							Album uploaded successfully! Share this link:
						</p>
						<a
							href={shareableLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							{shareableLink}
						</a>
						<button
							onClick={() =>
								navigator.clipboard.writeText(shareableLink)
							}
							className="ml-2 bg-blue-500 text-white py-1 px-2 rounded"
						>
							Copy Link
						</button>
					</div>
				)}
				<form
					onSubmit={handleSubmit(onSubmit, onErrors)}
					className={cn("flex items-center justify-center")}
				>
					<Button
						variant="outline"
						type="submit"
						disabled={mutation.isPending}
					>
						{mutation.isPending ? "Uploading..." : "Upload Album"}
					</Button>
					<div>
						{mutation.isError && (
							<p className="text-red-500">
								Error uploading:{" "}
								{(mutation.error as Error).message}
							</p>
						)}
						{mutation.isSuccess && (
							<p className="text-green-500">
								Uploaded successfully!
							</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
