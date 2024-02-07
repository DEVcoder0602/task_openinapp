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
        backgroud_purple: "#605BFF",
        background_white: "#F8FAFF",
        input_background: "#F5F5F5",
        input_background_active: "#E5E5E5",
        text_secondary: "#858585",
        text_link: "#346BD4",
      },
    },
  },
  plugins: [],
};
