"use client";
import Image from "next/image";
import { useState } from "react";
//import IconBlankRSvg from "/public/icon_blankR.svg";

export default function Button02() {
  // States
  const [, isHovered] = useState<boolean>(false);
  
  // Render
  return (
    <a 
      className={ "flex space-x-[5%] justify-center items-center border-white border-[4px] border-solid rounded-full md:px-auto py-[22px] md:py-[6%] text-white text-16ptr md:text-24ptr font-bold hover:opacity-60 w-full transition-opacity duration-500" }
      href={ "https://google.com" }
      target={ "_blank" }
      onMouseEnter={ () => isHovered(true) }
      onMouseLeave={ () => isHovered(false) }
    >
      <Image
        src={ "/icon_blankW.png" }
        alt={ "外部リンク" }
        width={ 28 }
        height={ 28 }
        className={ "w-[5.5%] aspect-square" }
      />
      <span className={ "whitespace-nowrap lg:text-[34px]" }>ブリ―ビクス研究会HP</span>
    </a>
  );
};