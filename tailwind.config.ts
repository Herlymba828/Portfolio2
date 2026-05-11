import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          card: "var(--bg-card)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          light: "var(--border-light)",
        },
        shadow: {
          light: "var(--shadow-light)",
          medium: "var(--shadow-medium)",
          strong: "var(--shadow-strong)",
        },
        accent: {
          violet: "#7c3aed",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          indigo: "#4338ca",
        },
        neutral: {
          slate: "#64748b",
          white: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "var(--hero-gradient)",
        "gradient-premium": "linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-premium": "pulse-premium 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradientShift 3s ease infinite",
        "loading-shimmer": "loading-shimmer 1.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)" },
        },
        "pulse-premium": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "gradientShift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "loading-shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-violet": "0 0 20px rgba(124, 58, 237, 0.4)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.4)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.4)",
        "glow-premium": "0 0 30px rgba(124, 58, 237, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)",
        "premium-light": "0 8px 32px var(--shadow-light)",
        "premium-medium": "0 12px 40px var(--shadow-medium)",
        "premium-strong": "0 20px 60px var(--shadow-strong)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionProperty: {
        "height": "height",
        "spacing": "margin, padding",
      },
    },
  },
  plugins: [],
};

export default config;