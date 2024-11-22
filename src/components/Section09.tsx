import Image from "next/image";
import MotionBox from "@/components/MotionBox";

export default function Section09() {
  // Render
  return (
    <section id={ "section-09" } className={ "bg-[#f57c14] pt-[45px] md:pt-[90px] pb-[50px] md:pb-[100px]" }>
      <MotionBox className={ "flex flex-col justify-center items-center gap-y-[25px] md:gap-y-[50px] mb-[50px]" }>
        <Image
          src={ "/header_logo.svg" }
          alt={ "ロゴ" }
          width={ 208 }
          height={ 69 }
          className={ "block w-auto" }
        />
        <div className={ "flex flex-col gap-y-[40px]" }>
          <div className={ "flex flex-col gap-y-[20px] mx-auto" }>
            <p className={ "text-white" }>ブリ―ビクス・スタジオ</p>
            <p className={ "text-white" }>BODY ＆...(ボディーアンド)</p>
          </div>
          <div className={ "flex flex-col gap-y-[20px]" }>
            <p className={ "text-white text-center" }>〒910-0006 福井県福井市中央1丁目7-5</p>
            <p className={ "text-white text-center" }>理容オークボさん 2F</p>
          </div>
        </div>
      </MotionBox>
      
      <MotionBox className={ "flex space-x-[12%] justify-center items-center mb-[13%]" }>
        <a 
          href={ "https://google.com" }
          target={ "blank" }
          title={ "LINEロゴ" }
          className={ "block hover:opacity-60 transition-opacity duration-500" }
        >
          <Image
            src={ "/icon_lineW.png" }
            alt={ "LINEロゴ" }
            width={ 60 }
            height={ 57 }
            className={ "w-[80%] md:w-auto aspect-[60/57]" }
          />
        </a>
        
        <a 
          href={ "https://google.com" }
          target={ "blank" }
          title={ "Instagramロゴ" }
          className={ "block hover:opacity-60 transition-opacity duration-500" }
        >
          <Image
            src={ "/icon_instagram.png" }
            alt={ "Instagramロゴ" }
            width={ 55 }
            height={ 55 }
            className={ "w-[80%] md:w-auto aspect-square" }
          />
        </a>
        
      </MotionBox>
      
      <p className={ "mx-auto text-center text-white text-10ptr md:text-20ptr font-normal" }>&copy;breabics studio BODY &amp;</p>
      
    </section>
  );
};