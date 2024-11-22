"use client";
import Image from "next/image";
import { useState } from "react";
//import IconBlankRSvg from "/public/icon_blankR.svg";

export default function Button09() {
  // States
  const [, isHovered] = useState<boolean>(false);
  
  // Render
  return (
    <a 
      className={ "flex space-x-[3%] justify-center items-center border-solid rounded-full py-[6%] md:py-[6%] bg-[#01b901] md:h-[130px] hover:opacity-60 transition-opacity duration-500" }
      href={ "https://google.com" }
      target={ "_blank" }
      onMouseEnter={ () => isHovered(true) }
      onMouseLeave={ () => isHovered(false) }
    >
      <Image
        src={ "/icon_lineW.png" }
        alt={ "LINEロゴ" }
        width={ 60 }
        height={ 57 }
        className={ "block w-[10%] md:w-[14%] aspect-[60/57]" }
      />
      <span className={ "text-white text-21ptr md:text-38ptr font-bold  whitespace-nowrap" }>ご予約・お問い合わせ</span>
    </a>
  );
};