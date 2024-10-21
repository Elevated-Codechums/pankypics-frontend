"use client";

import { cn } from "@/libs/utils";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

type FormValues = {
	file: string;
};

interface FileUploadProps {
	onSubmit: (data: FormValues) => void;
}



export default function FileUpload({ onSubmit }: FileUploadProps) {
	const form = useForm<FormValues>();

	const { register, control, handleSubmit } = form;

	return (
		<div
			className={cn(
				"flex flex-col",
				"items-center",
				"justify-center",
				"min-h-screen",
				"gap-4"
			)}
		>
			<div>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<input type="file" {...register("file")} />
					<button
						className={cn(
							"bg-gray-900",
							"hover:bg-gray-700",
							"text-white",
							"font-bold",
							"py-2 px-4",
							"rounded"
						)}
						type="submit"
					>
						Upload
					</button>
				</form>
				<DevTool control={control} />
			</div>
		</div>
	);
}
