import type { Config } from "tailwindcss";

// フォントサイズのpx->rem計算用関数
const fontSize = Object.fromEntries(
  [...Array(300)].map((_, index) => { 
    const px = index + 10;
    return [`${ px }ptr`, `${ px / 16 }rem`]
  })
);

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "xs": "400px",
        "sm": "550px",
        "md": "750px",
        "lg": "1000px",
        "xl": "1200px",
      },
    },
    fontFamily: {
      "notosansjp": '"Noto Sans JP", sans-serif',
      "dotgothic16": 'DotGothic16, sans-serif',
      "yugothic": '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
      "arial": 'Arial, メイリオ',
      "roboto": 'Roboto,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif',
      "montserrat": 'Montserrat, "Helvetica Neue", Arial, sans-serif',
      "poppins": "'Poppins', sans-serif"
    },
    extend: {
      fontSize: fontSize,
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
