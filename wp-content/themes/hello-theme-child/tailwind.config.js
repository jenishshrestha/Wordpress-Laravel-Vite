const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const config = {
  content: ["./app/blocks/**/*.css", "./app/**/*.php", "./*.php", "./*.php"],
  theme: {
    fontFamily: {
      manrope: ['"Manrope", sans-serif'],
      bricolage_grotesque: ['"Bricolage Grotesque", sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
      h1: ["4rem"],
      h2: ["3rem"],
      h3: ["2rem"],
      h4: ["1.875rem"],
      h5: ["1.5rem"],
      h6: ["1.25rem"],
    },
    container: {
      center: true,
      screens: {
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      black: "#000000",
      white: colors.white,
      transparent: "transparent",
      current: "currentColor",

      // Ocean Blue
      "b-0": "#EAEBF2",
      "b-10": "#AAAEC8",
      "b-20": "#878CB1",
      "b-30": "#535B8F",
      "b-40": "#303978",
      "b-50": "#222854",
      "b-60": "#1D2349",

      // Neutral
      "n-0": colors.white,
      "n-10": "#CBCBCB",
      "n-20": "#A5A5A9",
      "n-30": "#787982",
      "n-40": "#43455A",
      "n-50": "#262942",
      "n-60": "#0E1129",

      bg: "#F2E9DE",
      orange: "#DC9122",
      red: "#CC5254",
      yellow: "#F3B415",
      blue: "#599DE0",
      purple: "#6A66A8",
      violet: "#599DE0",
      green: "#74AF61",
      default: "#152734",
      caption: "#0E1129",
      excerpt: "#64748B",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
