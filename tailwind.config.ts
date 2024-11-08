import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "480px",
      tablet: "840px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      spaceGrotesk: "var(--spaceGrotesk)",
    },
    extend: {
      maxWidth:{
        'page' : '1920px'
      },
      colors: {
        primary: "var(--primary)",
        backgroundLight: "var(--backgroundLight)",
        backgroundLighter: "var(--backgroundLighter)",
        foreground: "var(--foreground)",
        white: "var(--white)"
      },

    },
  },
  plugins: [],
};
export default config;
