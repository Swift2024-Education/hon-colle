import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'sky-swift': '#D0EDF3',
      },
      size: {
        '128': '32rem',
      },
      borderRadius: {
        marukado: '35px',
      },
    },
  },
  plugins: [],
};
export default config;
