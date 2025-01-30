/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#2A2A27",
        lsecondary: "#3B3B3D",
        txt: "#A7A7A6",
        txtsecondary: "#B0B0B0",
        txtlight: "#E2E2E1",
        iblue: "#3395FF",
      },
    },
  },
  plugins: [],
};
