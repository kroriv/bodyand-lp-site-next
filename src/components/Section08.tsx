import Image from "next/image";
import Map08 from "@/components/Map08";
import Button08 from "@/components/Button08";
import Button09 from "@/components/Button09";
import MotionBox from "@/components/MotionBox";

export default function Section08() {
  // Render
  return (
    <section id={ "section-08" } className={ "bg-white pt-[45px] md:pt-[90px] px-[calc(100%*(1/15))]" }>
      <MotionBox className={ "flex flex-col gap-y-[18px] justify-center items-center mb-[40px] md:mb-[80px]" }>
        <h2 className={ "font-poppins font-bold text-40ptr md:text-80ptr leading-none tracking-wider" }>ACCESS</h2>
        <span className={ "font-bold text-15ptr md:text-26ptr tracking-wide leading-none" }>アクセス</span>
      </MotionBox>
      
      <MotionBox id={ "map" } className={ "w-full h-[32%] mb-[50px]" }>
        <Map08/>
      </MotionBox>
      
      <MotionBox className={ "mx-auto w-full md:w-[80%] mb-[60px]" }>
        <Button08/>
      </MotionBox>
      
      <MotionBox className={ "mb-[40px]" }>
        <Image
          src={ "/main-logo.svg" }
          alt={ "ロゴ" }
          width={ 310 }
          height={ 67 }
          className={ "w-auto md:h-[100px]" }
        />
      </MotionBox>
      
      <MotionBox className={ "flex flex-col space-y-[2%] mb-[60px]" }>
        <p className={ "text-12ptr md:text-26ptr font-medium" }>〒910-0006</p>
        <p className={ "text-12ptr md:text-26ptr font-medium" }>福井県福井市中央１丁目７ー５　理容オークボさん2F</p>
      </MotionBox>
      
      
      <MotionBox className={ "px-[6.66%] py-[6.66%] bg-[#ffebd8] rounded-lg flex flex-col space-y-[3%] mb-[60px]" }>
        <p className={ "text-15ptr md:text-26ptr font-medium" }>【レッスン日時】</p>
        <p className={ "text-15ptr md:text-26ptr font-medium" }>月曜日　17:30～19:00</p>
        <p className={ "text-15ptr md:text-26ptr font-medium" }>水曜日　14:30～19:00／19:30～21:00</p>
        <p className={ "text-15ptr md:text-26ptr font-medium" }>木曜日　20:00～21:30</p>
        <p className={ "text-15ptr md:text-26ptr font-medium" }>土曜日　10:30～12:00(森田教室)</p>
      </MotionBox>
      
      <MotionBox className={ "mb-[60px] md:mb-[120px]" }>
        <Image
          src={ "/access_gallery.jpg" }
          alt={ "ギャラリー" }
          width={ 650 }
          height={ 984 }
          //className={ "w-auto md:h-[100px]" }
        />
      </MotionBox>
      
      <MotionBox className={ "mx-auto w-full md:w-[90%] pb-[60px] md:pb-[120px]" }>
        <Button09/>
      </MotionBox>
      
    </section>
  );
};