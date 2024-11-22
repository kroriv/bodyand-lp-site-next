import Image from "next/image";
import MotionBox from "@/components/MotionBox";
import MotionText from "@/components/MotionBox";

export default function Section03() {
  // Render
  return (
    <section id={ "section-03" } className={ "bg-white pt-[47px] md:pt-[94px] pb-[50px] md:pb-[100px]" }>
      <MotionBox className={ "flex flex-col justify-center items-center mb-[60px]" }>
        <h2 className={ "font-bold text-23ptr md:text-50ptr tracking-wide leading-tight my-0 py-0 bg-[linear-gradient(transparent_70%,#fdf822_30%)]" }>こんなお悩みありませんか？</h2>
      </MotionBox>
      <MotionBox className={ "mb-[18px] px-[1%]" }>
        <Image
          src={ "/sec-nayami_img01.png" }
          alt={ "こんなお悩みありませんか？" }
          width={ 686 }
          height={ 679 }
          className={ "block mx-auto" }
        />
      </MotionBox>
      <div className={ "flex flex-col justify-center items-center space-y-0" }>
        <MotionText className={ "text-21ptr md:text-50ptr font-bold tracking-wide leading-snug" }>
          <span className={ "block text-center" }>あなたの</span>
          <span className={ "inline bg-[linear-gradient(transparent_75%,#fdf822_25%)]" }>姿勢・歪み・痛み</span>の
        </MotionText>
        <MotionText className={ "text-21ptr md:text-50ptr font-bold tracking-wide" }>根本解決は</MotionText>
      </div>
      <div className={ "flex flex-col justify-center items-center mt-[0%]" }>
        <MotionText className={ "text-21ptr md:text-50ptr font-bold tracking-wide bg-[linear-gradient(transparent_75%,#fdf822_35%)] leading-snug" }><span></span><span className={ "text-30ptr md:text-72ptr text-[#0fb6ad]" }>脳の認知</span>にあった！</MotionText>
      </div>
    </section>
  );
};