import daisyui from "daisyui";
import typography from "@tailwindcss/typography"
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    theme: {
        extend: {},
    },
    plugins: [
        daisyui,
        typography
    ],
}

