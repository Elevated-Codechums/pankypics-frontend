import { Button } from "@/Components/Utilities/Buttons";
import ExternalLink from "@/assets/external-link.svg";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { UrlObject } from "url";

interface ButtonInfo {
	id: number;
	buttonText: string;
	buttonLink: string | UrlObject;
	buttonSVG: React.ReactNode;
}

interface SectionTitleProps {
	heading: string;
	buttonText: string;
	buttonLink: string | UrlObject;
	reverse?: boolean;
	additionalButtons?: boolean;
	additionalButtonInfo?: ButtonInfo[];
}

export function SectionTitle({
	heading,
	buttonText,
	buttonLink,
	additionalButtons,
	additionalButtonInfo,
	reverse,
}: SectionTitleProps) {
	return (
		<div
			className={cn(
				"flex flex-col min-[971px]:flex-row gap-7 min-[971px]:gap-0 items-center justify-between w-full min-[548px]:px-40 px-10",
				{
					"min-[971px]:flex-row-reverse": reverse,
				}
			)}
		>
			<h2 className="font-bold font-afacad min-[775px]:text-6xl min-[548px]:text-3xl text-xl">
				{heading}
			</h2>
			{additionalButtons ? (
				<div className="flex gap-5">
					{additionalButtonInfo?.map((buttonInfo) => (
						<Link
							key={buttonInfo.id}
							href={"/" + buttonInfo.buttonLink}
						>
							<Button
								variant="default"
								className="font-raleway font-bold"
							>
								{buttonInfo.buttonSVG ? (
									<span className="">
										{buttonInfo.buttonSVG}
									</span>
								) : (
									<span className="">
										{buttonInfo.buttonText}
									</span>
								)}
							</Button>
						</Link>
					))}
				</div>
			) : (
				<Link href={"/" + buttonLink}>
					<Button
						variant="default"
						className="font-raleway font-bold"
					>
						<span className="">{buttonText}</span>
						<span>
							<ExternalLink className="w-4 h-4 ml-2" />
						</span>
					</Button>
				</Link>
			)}
		</div>
	);
}
