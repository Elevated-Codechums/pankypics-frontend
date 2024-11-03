import { SectionTitle } from "../Utilities/Headings/SectionTitle";

interface AlbumSliderProps {
    heading: string;
    buttonText: string;
    buttonLink: string;
    reverse?: boolean;
}

export default function AlbumSlider(
    { heading, buttonText, buttonLink }: AlbumSliderProps
) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <SectionTitle heading={heading} buttonText={buttonText} buttonLink={buttonLink} reverse />
        </div>
    )
}