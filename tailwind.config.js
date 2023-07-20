/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                primary: {
                    DEFAULT: "#0E0E52",
                },
                secondary: {
                    DEFAULT: "#256BCB",
                },
            },
        },
    },
    plugins: [],
};
