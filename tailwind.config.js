/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "var(--primary)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
				},
				text: {
					DEFAULT: "var(--text)",
				},
				background: {
					DEFAULT: "var(--background)",
				},
				accent: {
					DEFAULT: "var(--accent)",
				},
				success: {
					DEFAULT: "var(--success)",
				},
				neutral: {
					DEFAULT: "var(--neutral)",
				},
				warning: {
					DEFAULT: "var(--warning)",
				},
				danger: {
					DEFAULT: "var(--danger)",
				},
			},
			fontFamily: {
				base: ["var(--font-base)"],
				heading: ["var(--font-headings)"],
				"nufogy-typo": ["var(--font-nufogy-typo)"],
			},
		},
	},
	plugins: [require("daisyui")],
};
