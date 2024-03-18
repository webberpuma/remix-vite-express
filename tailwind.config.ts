import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [
    plugin(({ theme, matchUtilities }) => {
      matchUtilities(
        {
          neon: (value, { modifier }) => {
            return {
              boxShadow: `0 0 5px ${value}, 0 0 20px ${modifier}`,
            };
          },
        },
        {
          type: ["color"],
          values: flattenColorPalette(theme("colors")),
          modifiers: flattenColorPalette(theme("colors")),
        }
      );
    }),
  ],
} satisfies Config;
