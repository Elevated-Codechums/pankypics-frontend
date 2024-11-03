import CTA from "../Utilities/CTA";


export default function LandingCTA() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <CTA
                heading="Capturing moments with passion"
                description="Explore my extensive collection"
                buttonText="Explore More"
                buttonLink="explore-more"
            />
        </div>
    )
}