"use client";
import { cn } from "@/libs/utils";
import { useMutation } from "@tanstack/react-query";
import { useForm, FieldErrors } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/Components/Utilities/Buttons";
import { useAuthStore } from "@/stores/authStore";

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
				"Login failed:",
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
			<div>
				<h1 className="text-3xl font-bold font-afacad">
					Register page
				</h1>
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
					<label htmlFor="name">Name</label>
					<span>
						{errors.admin_name && (
							<p className="font-bold text-red-500">
								{errors.admin_name.message}
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
				<input
					className={cn(
						"border border-gray-300",
						"focus:outline-none focus:ring focus:ring-gray-300",
						"w-full",
						"rounded-md p-1"
					)}
					type="text"
					id="email"
					{...register("admin_email", {
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
				<div className={cn("flex justify-between", "space-y-1")}>
					<label htmlFor="password">Key</label>
					<span>
						{errors.key && (
							<p className="font-bold text-red-500">
								{errors.key.message}
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
					id="key"
					{...register("key", {
						required: "Key is required",
						minLength: {
							value: 15,
							message: "key must be at least 15 characters",
						},
						maxLength: {
							value: 15,
							message: "key must be at most 15 characters",
						},
					})}
				/>
				<Button>Register</Button>
			</form>
			{/* <DevTool control={control} /> */}
		</div>
	);
}

// const ProtectedRegister = () => (
// 	<WithAuthProtection allowedWhenAuthenticated="/admin">
// 		<Register />
// 	</WithAuthProtection>
// );

// ProtectedRegister.displayName = "ProtectedRegister";

// export default ProtectedRegister;

export default Register;
