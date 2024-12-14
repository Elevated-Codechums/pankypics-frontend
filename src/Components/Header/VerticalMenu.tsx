import { cn } from "@/libs/utils";
import Link from "next/link";

interface VerticalMenuProps {
	head: { heading: string; icon: React.ReactNode };
	links: { name: string; href: string; icon: React.ReactNode }[];
	open: boolean;
}

export default function VerticalMenu({
	head,
	links,
	open,
}: VerticalMenuProps) {
	return (
		<div className={"flex flex-col items-start justify-center gap-5"}>
			<h5
				className={cn(
					"uppercase font-afacad text-2xl ml-7",
					open ? "flex items-center justify-center gap-2" : "hidden"
				)}
			>
				<span>
                    {head.icon}
                </span>
				{head.heading}
			</h5>
			<ul
				className={cn(
					"grid grid-rows-1 justify-center items-start gap-3 font-raleway text-2xl",
					open ? "ml-24" : "ml-0"
				)}
			>
				{links.map((link, index) => (
					<li
						key={index}
						className={cn("py-2 px-4 hover:bg-gray rounded-full")}
					>
						<Link
							className={cn(
								"flex items-center justify-between gap-3"
							)}
							href={link.href}
						>
							{link.icon}
							{open && <span>{link.name}</span>}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
