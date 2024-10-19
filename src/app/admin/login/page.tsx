"use client";
import { useQuery, useIsFetching } from "@tanstack/react-query";

export default function Login() {
	const { data, isLoading, isError, isSuccess } = useQuery({
		queryKey: ["login"],
		queryFn: () => {
			return fetch("http://localhost:4000/").then((res) => res.json());
		},
	});

	return (
		<div>
			<h1 className="text-3xl font-bold font-raleway">Login page</h1>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Error</p>}
			{isSuccess && <div>{JSON.stringify(data)}</div>}
		</div>
	);
}
