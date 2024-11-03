import { SectionTitle } from "../Utilities/Headings/SectionTitle";
import { UrlObject } from 'url';

interface ButtonInfo {
    id: number;
    buttonText: string;
    buttonLink: string | UrlObject;
    buttonSVG: React.ReactNode;
}

interface AboutProps {
    heading: string;
    buttonText: string;
    buttonLink: string | UrlObject;
}

export default function About({
    heading,
    buttonText,
    buttonLink,
}: AboutProps) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <SectionTitle
                heading={heading}
                buttonText={buttonText}
                buttonLink={buttonLink}
            />
        </div>
    );
}
