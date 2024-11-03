import Link from "next/link";
import ExternalLink from "@/assets/external-link.svg";
import { Button } from "./Buttons";
import { cn } from "@/libs/utils";

interface CTAProps {
	heading: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}

export default function CTA({
	heading,
	description,
	buttonText,
	buttonLink,
}: CTAProps) {
	return (
		<div className="flex items-center justify-between bg-black w-full h-[400px] m-10 rounded-2xl px-40">
			<div className={cn("text-white flex flex-col gap-4")}>
				<h4 className="text-7xl font-bold font-afacad w-[600px] tracking-wide">{heading}</h4>
				<p className="text-xl font-raleway">{description}</p>
			</div>
			<div>
				<Link href={"/" + buttonLink}>
					<Button variant="white" className={cn("flex items-center justify-center gap-2")}>
                        <span className="font-raleway font-bold">
                            {buttonText}
                        </span>
                        <span>
                            <ExternalLink />
                        </span>
                    </Button>
				</Link>
			</div>
		</div>
	);
}
