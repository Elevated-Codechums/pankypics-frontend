"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import axios from "axios";
import { Button } from "@/Components/Utilities/Buttons";
import { cn } from "@/libs/utils";

// Move FormValues type outside of the component for clarity
type FormValues = {
    file: FileList; // Use FileList for file input
};

export default function FileUpload() {
    const { register, handleSubmit, formState, reset } = useForm<FormValues>();
    const { errors } = formState;

    const mutation = useMutation({
        mutationFn: async (formData: FormValues) => {
            const data = new FormData();
            data.append("photo", formData.file[0]); // Use file[0] to get the selected file

            const response = await axios.post("http://localhost:4000/upload/photo", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return response.data;
        },
        onSuccess: () => {
            console.log("File uploaded successfully");
            reset(); // Reset the form after successful upload
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
        <div className={cn("flex flex-col items-center justify-center min-h-screen gap-4")}>
            <form
                className={cn("flex flex-col items-center justify-center gap-4")}
                onSubmit={handleSubmit(onSubmit, onErrors)}
            >
                <div>
                    {errors.file && (
                        <p className="text-red-500">
                            {errors.file.type === "required" ? "File is required" : "Invalid file format"}
                        </p>
                    )}
                </div>
                <div className={cn("flex items-center justify-center gap-4")}>
                    <input
                        className={cn("border border-gray-300 rounded-md p-4")}
                        type="file"
                        {...register("file", { required: true })}
                    />
                    <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ? "Uploading..." : "Upload"}
                    </Button>
                </div>
                {mutation.isError && (
                    <p className="text-red-500">Error uploading file: {(mutation.error as Error).message}</p>
                )}
				{
					mutation.isSuccess && (
						<p className="text-green-500">File uploaded successfully</p>
					)
				}
            </form>
        </div>
    );
}
