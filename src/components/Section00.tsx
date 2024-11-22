import EmblaCarousel from "@/components/EmblaCarousel";
import Image from "next/image";
import MotionBox from "@/components/MotionBox";

export default function Section00() {
  // Render
  return (
    <section id={ "section-00" } className={ "relative" }>
      <MotionBox>
        <h1 className={ "block absolute top-0 left-0 z-10 px-[4%] py-[2%]" } title={ "ブリ―ビクス・スタジオ BODY &..." }>
          <Image
            src={ "/header_logo.svg" }
            alt={ "ロゴ" }
            width={ 208 }
            height={ 69 }
            className={ "h-[70%] md:h-auto block scale-[70%] md:scale-100 origin-left" }
          />
        </h1>
        <EmblaCarousel/>
      </MotionBox>
    </section>
  );
};