module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      infant: "'Cormorant Infant', serif",
      zen: "'Zen Kaku Gothic New', sans-serif",
    },
    fontSize: {
      size1: "clamp(2rem, 1.7993rem + 0.8451vw, 2.75rem)",
      size2: "clamp(1.8rem, 1.6261rem + 0.7324vw, 2.45rem)",
      size3: "clamp(1.6rem, 1.4662rem + 0.5634vw, 2.1rem)",
      size4: "clamp(1.4rem, 1.293rem + 0.4507vw, 1.8rem)",
      size5: "clamp(1.2rem, 1.1331rem + 0.2817vw, 1.45rem)",
      size6: "clamp(0.9rem, 0.8732rem + 0.1127vw, 1rem)",
      body: "clamp(1rem, 0.9599rem + 0.169vw, 1.15rem)",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
