/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#f2f2f2",
				black: "#101010",
				gray: "#2f2f2f",
			},
			fontFamily: {
				afacad: ["var(--font-afacad)"],
				raleway: ["var(--font-raleway)"],
				qwitcher_grypen: ["var(--font-qwitcher-grypen)"],
			},
		},
	},
	plugins: [],
};
