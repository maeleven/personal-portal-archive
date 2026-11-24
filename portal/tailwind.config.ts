import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1021",
        panel: "#141b30",
        accent: "#5b8cff",
      },
    },
  },
  plugins: [],
};

export default config;
