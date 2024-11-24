"use client";

import LogoutButton from "@/Components/Utilities/logout";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Admin() {
	const router = useRouter();

	const [authChecked, setAuthChecked] = useState(false);

	const { isCheckingAuth, checkAuth, isAuthenticated, admin } =
		useAuthStore();

	useEffect(() => {
		if (!authChecked) {
			const verifyAuth = async () => {
				await checkAuth();
				setAuthChecked(true); // Mark as checked after the first run
			};
			verifyAuth();
		}

		if (authChecked && isAuthenticated) {
			router.replace("/admin"); // Redirect if authenticated
		}
	}, [authChecked, checkAuth, isAuthenticated, router]);

	if (isCheckingAuth) {
		return (
			<div className="min-h-screen flex items-center justify-center text-3xl">
				<h1 className="text-3xl font-bold font-raleway">Loading...</h1>
			</div>
		);
	}

	console.log(isAuthenticated, isAuthenticated);
	console.log(admin);

	return (
		<div className="min-h-screen flex flex-col gap-5 items-center justify-center text-3xl">
			<h1 className="text-3xl font-bold font-raleway">
				Welcome {admin?.name} to your Admin Dashboard
			</h1>
			<LogoutButton />
		</div>
	);
}
