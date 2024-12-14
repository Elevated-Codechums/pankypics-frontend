"use client";

import { Button } from "@/Components/Utilities/Buttons";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const { logoutAdmin } = useAuthStore();
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await logoutAdmin(); // Await the logout function
			router.push("/login"); // Redirect to the login page
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<Button variant={"default"} onClick={handleLogout}>
			Logout
		</Button>
	);
}
