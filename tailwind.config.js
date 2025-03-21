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
        primary: "#FFB10A",
        background: "var(--background)",
        foreground: "var(--foreground)",
        paragraphColor: "#AAAAAA",
      },
    },
  },
  plugins: [],
};
