import {Afacad, Raleway} from "next/font/google"

const afacad_init = Afacad({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-afacad",
})

const raleway_init = Raleway({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-raleway",
})

export const afacad = afacad_init.variable
export const raleway = raleway_init.variable