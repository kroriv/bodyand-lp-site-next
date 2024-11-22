import Image from "next/image";
import MotionBox from "@/components/MotionBox";

export default function Section01() {
  // Render
  return (
    <section id={ "section-01" } className={ " bg-[#01cd20] max-h-[120px] fixed sm:relative bottom-0 left-0 z-20" }>
      <MotionBox className={ "" }>
        <a href={ "" }>
          <Image 
            src={ "/btn_LINE.jpg" } 
            alt={ "LINE" }
            width={ 750 }
            height={ 120 }
          />
        </a>
        {/*
        <div className={ "flex flex-col space-y-[2%] basis-[28%]" }>
          <p className={ "xs:text-20ptr md:text-26ptr text-white font-bold tracking-[0.080em] whitespace-nowrap" }>体験レッスン予約は</p>
          <p className={ "xs:text-20ptr md:text-26ptr text-white font-bold tracking-[0.080em] flex gap-[1%] items-center whitespace-nowrap" }>
            <Image
              src={ "/sec01-line_icon.png" }
              alt={ "" }
              width={ 36 }
              height={ 35 }
              className={ "w-[15%] md:w-auto md:h-auto" }
            />
            <span className={ "block w-[84%]" }>LINEでお気軽に</span>
          </p>
        </div>
        <div className={ "flex basis-[9.6%] justify-center items-center" }>
          <Image
            src={ "/sec01-line_QR.png" }
            alt={ "" }
            width={ 72 }
            height={ 72 }
            className={ "block" }
          />
        </div>
        <div className={ "flex basis-[38.2%] justify-center items-center" }>
          <Image
            src={ "/sec01-line_price.png" }
            alt={ "" }
            width={ 287 }
            height={ 68 }
            className={ "mt-2 md:mt-4" }
          />
        </div>
        */}
      </MotionBox>
    </section>
  );
};