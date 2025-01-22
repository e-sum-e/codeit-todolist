import type { Config } from "tailwindcss";

const slate = {
  900: "#0F172A",
  800: "#1E293B",
  500: "#64748B",
  400: "#94A3B8",
  300: "#CBD5E1",
  200: "#E2E8F0",
  100: "#F1F5F9",
};

const violet = {
  600: "#7C3AED",
  100: "#EDE9FE",
};

const rose = {
  500: "#F43F5E",
};

const lime = {
  300: "#BEF264",
};

const amber = {
  800: "#92400E",
};

export default {
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
        slate,
        violet,
        rose,
        lime,
        amber,
        button: {
          secondary: slate["200"],
          primary: violet["600"],
          danger: rose["500"],
          success: lime["300"],
        },
      },
      fontFamily: {
        nanum: ["NanumSquare", "sans-serif"],
      },
      fontSize: {
        "bold-20": ["20px", { lineHeight: "22px", fontWeight: "700" }],
        "bold-18": ["18px", { lineHeight: "20px", fontWeight: "700" }],
        "extra-bold-16": ["16px", { lineHeight: "18px", fontWeight: "800" }],
        "bold-16": ["16px", { lineHeight: "18px", fontWeight: "700" }],
        "regular-16": ["16px", { lineHeight: "18px", fontWeight: "400" }],
      },
    },
  },
  safelist: [
    "bg-button-secondary",
    "bg-button-danger",
    "bg-button-primary",
    "bg-button-success",
  ],
  plugins: [],
} satisfies Config;
