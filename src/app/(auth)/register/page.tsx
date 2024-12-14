"use client";
import { cn } from "@/libs/utils";
import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/Components/Utilities/Buttons";
import { useAuthStore } from "@/stores/authStore";
import { Input } from "@/Components/Utilities/Inputs";

function Register() {
	const router = useRouter();

	const { registerAdmin } = useAuthStore();
	const form = useForm<FormValues>();

	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	type FormValues = {
		admin_name: string;
		admin_email: string;
		password: string;
		key: string;
	};

	const mutation = useMutation({
		mutationFn: (data: FormValues) =>
			registerAdmin(
				data.admin_name,
				data.admin_email,
				data.password,
				data.key
			),
		onSuccess: () => {
			router.push("/admin");
		},
		onError: (error: {
			response?: { data?: { error?: string } };
			message: string;
		}) => {
			console.error(
				"Registration failed:",
				error.response?.data?.error || error.message
			);
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
			<form
				noValidate
				onSubmit={handleSubmit(onSubmit, onErrors)}
				className={cn(
					"flex flex-col",
					"font-raleway",
					"space-y-4",
					"w-[30%]",
					"p-10",
					"border border-gray-300",
					"rounded-xl",
					"bg-black",
					"text-white"
				)}
			>
				<div className="text-center p-5">
					<h1 className="text-5xl font-bold font-afacad">
						Register
					</h1>
				</div>
				<div className={cn("w-[1px] bg-white h-full")}></div>
				<div className={cn("flex justify-between", "space-y-1")}>
					<label htmlFor="name">Name</label>
					<span>
						{errors.admin_name && (
							<p className="font-bold text-red-500">
								{errors.admin_name.message}
							</p>
						)}
					</span>
				</div>
				<Input
					type="text"
					id="name"
					{...register("admin_name", {
						required: "Name is required",
					})}
				/>
				<div className={cn("flex justify-between", "space-y-1")}>
					<label htmlFor="email">Email</label>
					<span>
						{errors.admin_email && (
							<p className="font-bold text-red-500">
								{errors.admin_email.message}
							</p>
						)}
					</span>
				</div>
				<Input
					type="text"
					id="email"
					{...register("admin_email", {
						required: "Email is required",
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
				<Input
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
				<div className={cn("flex justify-between", "space-y-1")}>
					<label htmlFor="key">Key</label>
					<span>
						{errors.key && (
							<p className="font-bold text-red-500">
								{errors.key.message}
							</p>
						)}
					</span>
				</div>
				<Input
					type="password"
					id="key"
					{...register("key", {
						required: "Key is required",
						minLength: {
							value: 15,
							message: "Key must be at least 15 characters",
						},
						maxLength: {
							value: 15,
							message: "Key must be at most 15 characters",
						},
					})}
				/>
				<div
					className={cn(
						"w-full flex items-center justify-center pt-16"
					)}
				>
					<Button
						className={cn(
							"w-[50%]",
							"bg-white text-black hover:bg-gray hover:text-white"
						)}
						type="submit"
						disabled={mutation.isPending}
					>
						{mutation.isPending ? "Registering..." : "Register"}
					</Button>
				</div>
			</form>
			{mutation.isError && (
				<p className="text-red-500 font-bold">
					{mutation.error?.response?.data?.error ||
						"Registration failed. Please try again."}
				</p>
			)}
			{/* <DevTool control={control} /> */}
		</div>
	);
}

export default Register;
