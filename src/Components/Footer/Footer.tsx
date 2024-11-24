import Link from "next/link";
import Menu from "../Header/Menu";
import { cn } from "@/libs/utils";

export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="flex flex-col items-center justify-center bg-gray text-white text-center py-4 gap-5">
			<div className="flex min-[841px]:flex-row flex-col items-center justify-between w-full min-[1025px]:px-40 px-20 min-[841px]:gap-0 gap-5">
				<div>
					<Link href="/">
						<span className="font-qwitcher_grypen min-[590px]:text-7xl text-4xl">
							PankyPics
						</span>
					</Link>
				</div>
				<div className="font-raleway min-[590px]:text-xl text-md">
					<Menu />
				</div>
			</div>
			<div
				className={cn(
					"w-[95%] h-0.5 bg-white mx-auto mt-5 rounded-full"
				)}
			></div>
			<div className="flex min-[676px]:flex-row flex-col items-center justify-between w-full min-[1025px]:px-40 px-20 min-[676px]:gap-0 gap-5">
				<div className="text-sm">
					&copy; {year} PankyPics. All rights reserved.
				</div>
				<div className="text-sm">
					Designed with ❤️ by{" "}
					<Link href="">
						<span>Elevated Codechums</span>
					</Link>
				</div>
			</div>
		</footer>
	);
}
