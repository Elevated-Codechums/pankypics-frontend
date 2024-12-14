"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import { Button } from "@/Components/Utilities/Buttons";
import { cn } from "@/libs/utils";
import { useState, useEffect } from "react";
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
	file: FileList;
	photoCaption: string;
};

export default function Photos() {
	const router = useRouter();

	const [authChecked, setAuthChecked] = useState(false);
	const { isCheckingAuth, checkAuth, isAuthenticated } = useAuthStore();

	const [previewImages, setPreviewImages] = useState<string[]>([]);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [shareableLink, setShareableLink] = useState(""); // Store shareable link

	useEffect(() => {
		if (!authChecked) {
			const verifyAuth = async () => {
				await checkAuth();
				setAuthChecked(true); // Mark as checked after the first run
			};
			verifyAuth();
		}

		if (authChecked && isAuthenticated) {
			router.replace("/admin/upload/photo"); // Redirect if authenticated
		}
	}, [authChecked, checkAuth, isAuthenticated, router]);

	const { register, handleSubmit, formState, reset, watch } =
		useForm<FormValues>();
	const photoCaption = watch("photoCaption");
	const { errors } = formState;

	const mutation = useMutation({
		mutationFn: async () => {
			const data = new FormData();

			selectedFiles.forEach((file) => {
				data.append("photo", file);
				data.append("photoCaption", photoCaption);
			});

			const response = await axiosClient.post("/upload/photo", data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			return response.data;
		},
		onSuccess: (data) => {
			console.log("Files uploaded successfully", data);
			reset();
			setPreviewImages([]);
			setSelectedFiles([]);
			setShareableLink(`https://localhost:3000/share/${data.shareToken}`); // Set the shareable link
		},
		onError: (error: unknown) => {
			console.error("Error uploading files", error);
		},
	});

	const onSubmit = () => {
		console.log("Form Submitted", selectedFiles, photoCaption);
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

	if (isCheckingAuth) {
		return (
			<div className="min-h-screen flex items-center justify-center text-3xl">
				<h1 className="text-3xl font-bold font-raleway">Loading...</h1>
			</div>
		);
	}

	const handleRemoveImage = () => {
		setPreviewImages([]);
		setSelectedFiles([]);
	};

	return (
		<div
			className={cn(
				"flex flex-col",
				"items-center",
				"justify-between",
				"min-h-screen",
				"gap-4",
				"py-20"
			)}
		>
			<div
				className={cn("flex items-center justify-between gap-5 px-20")}
			>
				<div
					className={cn(
						"flex flex-col",
						"font-raleway",
						"space-y-4",
						"w-full",
						"p-10",
						"border border-gray-300",
						"rounded-xl",
						"bg-black",
						"text-white"
					)}
				>
					<h1 className="text-center text-4xl font-bold text-white">
						Upload a Picture
					</h1>
					<form
						className="flex flex-col w-full p-10 rounded-t-none rounded-md space-y-4"
						onSubmit={handleSubmit(onSubmit, onErrors)}
					>
						<div
							{...getRootProps()}
							className={cn(
								"bg-white text-black w-full rounded-md px-10 py-5 flex items-center justify-center transition-colors duration-200",
								isDragActive
									? "bg-gray border-dashed text-white"
									: "bg-white"
							)}
						>
							<input {...getInputProps()} />
							{isDragActive ? (
								<p>Drop the file here...</p>
							) : (
								<p className="flex flex-col items-center justify-center gap-4">
									<span>
										<CirclePlus />
									</span>
									Drag and drop a file here, or click to
									select a file
								</p>
							)}
						</div>
					</form>
				</div>

				<div className="flex flex-wrap gap-4 overflow-y-auto">
					{previewImages.length > 0 && (
						<h2 className={cn("text-3xl")}>Preview:</h2>
					)}

					{previewImages.map((src, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center gap-4 w-full mt-4 overflow-x-auto bg-black p-4 rounded-xl"
						>
							<motion.div
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
									<CircleCross
										className={cn("text-red-500")}
									/>
								</button>
							</motion.div>
							<Input
								type="text"
								placeholder="Enter caption"
								className="w-full mt-2"
								{...register("photoCaption", {
									required: true,
									setValueAs: (value) =>
										value.replace(/\s+/g, "-"),
								})}
							/>
							{errors.photoCaption && (
								<p className="text-red-500">
									Caption is required
								</p>
							)}
						</div>
					))}
				</div>
			</div>
			{shareableLink && (
				<div className="mt-4">
					<p className="text-green-500">
						File uploaded successfully! Share this link:
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
				className={cn(
					"flex items-center justify-between flex-row-reverse"
				)}
			>
				<Button
					variant={"outline"}
					type="submit"
					size={"lg"}
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
	);
}
