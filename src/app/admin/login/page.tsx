"use client";
import { cn } from "@/libs/utils";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

export default function Login() {
	const form = useForm<FormValues>();

	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;

	type FormValues = {
		email: string;
		password: string;
	};

	const mutation = useMutation({
		mutationFn: (newLogin: FormValues) => {
			return axios.post("http://localhost:4000/login", newLogin);
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
		mutation.mutate(data);
		console.log("Form Submitted");
	};

	const onErrors = (errors: FieldErrors<FormValues>) => {
		console.log("Form Errors", errors);
	};

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
				<h1 className="text-3xl font-bold font-afacad">Login page</h1>
			</div>
			<form
				noValidate
				onSubmit={handleSubmit(onSubmit, onErrors)}
				className={cn(
					"flex flex-col",
					"font-raleway",
					"space-y-4",
					"w-[50%]",
					"p-4",
					"border border-gray-300",
					"rounded-md"
				)}
			>
				<div className={cn("flex justify-between", "space-y-1")}>
					<label htmlFor="email">Email</label>
					<span>
						{errors.email && (
							<p className="font-bold text-red-500">
								{errors.email.message}
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
					id="email"
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[a-zA-Z0-9.!#$%&'*+/=?^`{|}]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: "Invalid email address",
						},
					})}
				/>
				<div className={cn("flex justify-between", "space-y-1")}>
					<label htmlFor="password">Password</label>
					<span>
						{errors.password && (
							<p className="font-bold text-red-500">
								{errors.password.message}
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
					type="password"
					id="password"
					{...register("password", {
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Password must be at least 6 characters",
						},
					})}
				/>
				<button
					className={cn(
						"bg-gray",
						"hover:opacity-95",
						"text-white",
						"font-bold",
						"py-2 px-4",
						"w-full",
						"rounded"
					)}
				>
					Login
				</button>
			</form>
			<DevTool control={control} />
		</div>
	);
}
