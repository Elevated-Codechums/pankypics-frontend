import Link from "next/link";

export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="bg-gray text-white text-center py-4">
			<div>
				<Link href="/">
					<span className="font-qwitcher_grypen text-4xl">PankyPics</span>
				</Link>
			</div>
			<div>
				<p>&copy; {year} PankyPics</p>
			</div>
		</footer>
	);
}
