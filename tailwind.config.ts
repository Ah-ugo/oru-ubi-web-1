// tailwind.config.ts
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"; // Import this to use default font families

const config: Config = {
  darkMode: ["class"], // Keep this for shadcn/ui dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // If you copied shadcn/ui components into a specific directory (e.g., 'src/components'),
    // make sure to include that path here:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // If you have files directly in the root that use Tailwind, include them
    // (though "*.{js,ts,jsx,tsx,mdx}" is broad and might be too much)
  ],
  theme: {
    container: {
      // This is part of shadcn/ui's default container
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Shadcn/ui colors (copy these directly if your components use them)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Your custom colors
        "oru-green": "#27AE60",
        "oru-dark": "#0A0A0A",
        "oru-gray": "#1A1A1A",
      },
      borderRadius: {
        // Shadcn/ui border radius (copy these)
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans], // Include default sans for shadcn/ui if you rely on it
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      keyframes: {
        // Shadcn/ui keyframes (copy these for components like accordion)
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Your custom keyframes
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(39, 174, 96, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(39, 174, 96, 0.6)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        // Shadcn/ui animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Your custom animations
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.8s ease-out",
        "fade-in": "fadeIn 1s ease-out",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Keep this plugin for shadcn/ui animations
};

export default config;
