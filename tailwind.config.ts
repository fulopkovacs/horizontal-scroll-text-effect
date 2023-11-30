import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { grayDark } from "@radix-ui/colors/";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // gray1, gray2...
        ...grayDark,
      },
      keyframes: {
        "bounce-x": {
          "0, 100%": { transform: "none" },
          "50%": { transform: "translateX(-25%)" },
        },
      },
      animation: {
        "bounce-x": "bounce-x 1s ease infinite",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
