import { UrlObject } from "url";
import { SectionTitle } from "../Utilities/Headings/SectionTitle";

interface ButtonInfo {
	id: number;
	buttonText: string;
	buttonLink: string | UrlObject;
	buttonSVG: React.ReactNode;
}

interface ContactProps {
	heading: string;
	buttonText: string;
	buttonLink: string | UrlObject;
	buttonSVG: React.ReactNode;
	additionalButtons?: boolean;
	additionalButtonInfo?: ButtonInfo[];
    reverse?: boolean;
}
export default function Contact({
	heading,
	buttonText,
	buttonLink,
	buttonSVG,
	additionalButtonInfo,
}: ContactProps) {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<SectionTitle
				heading={heading}
				buttonText={buttonText}
				buttonLink={buttonLink}
				additionalButtons
				additionalButtonInfo={additionalButtonInfo}
                reverse
			/>
		</div>
	);
}
