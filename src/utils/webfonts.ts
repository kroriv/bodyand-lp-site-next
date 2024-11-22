import { Noto_Sans_JP, Poppins } from "next/font/google";

const notosansjp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/*
const dotgothic16 = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
*/
export { notosansjp, poppins };