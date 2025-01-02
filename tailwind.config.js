/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "rgba(5, 141, 196, 0.21)", // 058DC4 com 21% de opacidade
        "link-text": "#058DC4", // Azul puro sem opacidade
        "footer-background": "#515050", // Cinza escuro do footer
        "blue-bar": "#058DC4",
        gray: "#C6C6C6", // Cinza claro
        "card-service": "radial-gradient(circle, #3A66A4 0%, #03367D 100%)", // Gradiente radial
      },
    },
  },
  plugins: [],
};
