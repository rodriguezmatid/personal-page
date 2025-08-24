import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#0ea5e9" }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
