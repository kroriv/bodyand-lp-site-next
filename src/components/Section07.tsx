import Image from "next/image";
import MotionBox from "@/components/MotionBox";

export default function Section07() {
  // Render
  return (
    <section id={ "section-07" } className={ "bg-[#f57c14] pt-[45px] md:pt-[90px] pl-[10%] relative" }>
      <MotionBox className={ "flex flex-col gap-y-[18px] justify-center items-center mb-[40px] md:mb-[80px] pr-[10%]" }>
        <h2 className={ "font-poppins font-bold text-40ptr md:text-80ptr text-white leading-none tracking-wider" }>MESSAGE</h2>
        <span className={ "font-bold text-white text-15ptr md:text-26ptr tracking-wide leading-none" }>ごあいさつ</span>
      </MotionBox>
      
      <MotionBox>
        <h5 className={ "flex flex-col space-y-[2.5%] mb-[30px] md:mb-[60px]" }>
          <p className={ "text-white text-18ptr md:text-36ptr font-bold" }>何歳からでも身体は変えられる。</p>
          <p className={ "text-white text-18ptr md:text-36ptr font-bold"}>”軽やかな身体”を体感しませんか。</p>
        </h5>
      </MotionBox>
      
      <MotionBox className={ "mb-[30px] md:mb-[60px]" }>
        <p className={ "text-white text-15ptr md:text-27ptr leading-loose tracking-wider font-medium pr-[13%]" }>
          私自身、学生時代から運動部だったことや車の事故などが原因で、腰痛や首の痛みなど、常に慢性的な不調を抱えていました。<br/>
          ブリ―ビクスは、エクササイズを通して、呼吸・姿勢に意識を向けることで、正しい身体の位置が自然に身についていきます。<br/>
          カラダもココロも整い、新しいチャレンジに向けて動き出したくなる、そんな理想の身体づくりを一緒に楽しみましょう!
        </p>
      </MotionBox>
      <MotionBox className={ "flex justify-end" }>
        <Image
          src={ "/sec-message_img01.png" }
          alt={ "" }
          width={ 711 }
          height={ 515 }
          className={ "" }
        />
      </MotionBox>
      
      <MotionBox className={ "absolute bottom-[40px] md:bottom-[80px] left-[11%] flex flex-col space-y-[16px]" }>
        <div className={ "flex flex-col space-y-[10px]" }>
          <p className={ "text-white text-12ptr md:text-20ptr" }>ブリ―ビクス研究会役職研究員</p>
          <p className={ "text-white text-12ptr md:text-20ptr" }>ブリ―ビクス上級トレーナー</p>
        </div>
        <p className={ "text-white mt-[10px]" }>
          <span className={ "text-15ptr md:text-32ptr font-medium" }>青木 雅明</span>
          <span className={ "text-12ptr md:text-20ptr" }> (あおき まさあき)</span>
        </p>
      </MotionBox>
      
    </section>
  );
};