"use client";
import Image from "next/image";
import { useState } from "react";
//import IconBlankRSvg from "/public/icon_blankR.svg";

export default function Button08() {
  // States
  const [, isHovered] = useState<boolean>(false);
  
  // Render
  return (
    <a 
      className={ "flex justify-between items-center border-[#f57c14] border-[4px] border-solid rounded-full px-[10%] py-[4.5%] md:h-[96px] text-[#f57c14] text-21ptr md:text-30ptr font-bold hover:opacity-60 transition-opacity duration-500" }
      href={ "https://google.com" }
      target={ "_blank" }
      onMouseEnter={ () => isHovered(true) }
      onMouseLeave={ () => isHovered(false) }
    >
      <Image
        src={ "/icon_map.png" }
        alt={ "ロゴ" }
        width={ 40 }
        height={ 42 }
        className={ "w-[10%] md:w-[10%]" }
      />
      <span>Google Maps</span>
      <Image
        src={ "/icon_blankOR.png" }
        alt={ "ロゴ" }
        width={ 23 }
        height={ 23 }
        className={ "w-[8%] md:w-[6%]" }
      />
    </a>
  );
};