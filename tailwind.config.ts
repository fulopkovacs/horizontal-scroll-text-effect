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
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
