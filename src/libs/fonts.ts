import {Afacad,Racing_Sans_One, Raleway, Qwitcher_Grypen} from "next/font/google"

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

const qwitcher_grypen_init = Qwitcher_Grypen({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-qwitcher-grypen",
})
const racingsans = Racing_Sans_One({
    display: "swap",
    subsets: ["latin"],
    weight: "400",
    variable: "--font-racing-sans",
})
export const racing_sans = racingsans.variable
export const afacad = afacad_init.variable
export const raleway = raleway_init.variable
export const qwitcher_grypen = qwitcher_grypen_init.variable