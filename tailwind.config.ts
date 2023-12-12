import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    themes: [
      {
        localTheme: {
          primary: "#facc15",
          secondary: "#374151",
          accent: "#ededed",
          neutral: "#ffffff",
          "base-100": "#fff",
          info: "#67e8f9",
          success: "#34d399",
          warning: "#fde047",
          error: "#b91c1c",
        },
      },
    ],
  },
};
export default config;
