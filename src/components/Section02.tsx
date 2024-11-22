import Button02 from "@/components/Button02";
import MotionBox from "@/components/MotionBox";
import MotionText from "@/components/MotionText";

export default function Section02() {
  // Render
  return (
    <section id={ "section-02" } className={ "bg-[#f57c14] pt-[45px] md:pt-[90px] pb-[50px] md:pb-[100px] px-[calc(100%*(1/15))]" }>
      <MotionBox className={ "flex flex-col gap-y-[18px] justify-center items-center mb-[40px] md:mb-[80px]" }>
        <h2 className={ "font-poppins font-semibold text-40ptr md:text-80ptr text-white tracking-wider leading-none" }>ABOUT</h2>
        <span className={ "font-semibold text-15ptr md:text-24ptr text-white tracking-wide leading-none" }>ブリービクスについて</span>
      </MotionBox>
      
      <div className={ "mb-[20px] md:mb-[40px] flex flex-col space-y-[10px] md:space-y-[20px]" }>
        <MotionText className={ "inline-block w-fit bg-white px-[3%] py-[14px] text-[#3d3d3d] text-20ptr sm:text-40ptr text-nowrap font-bold tracking-wider leading-none" }>
          身体がラクに、元気になる！
        </MotionText>
        <MotionText className={ "inline-block w-fit bg-white px-[3%] py-[14px] text-[#3d3d3d] text-20ptr sm:text-40ptr text-nowrap font-bold tracking-wider leading-none" }>
          気軽に始められるエクササイズ
        </MotionText>
      </div>
      
      <div className={ "mb-[32.5px] md:mb-[65px]" }>
        <MotionText className={ "text-white md:text-[30px] font-notosansjp font-semibold tracking-wider leading-[26px] md:leading-[56px]" }>
          ブリ―ビクスとは、身体の正しい在り方に着目した「呼吸・姿勢・動作」を感じるエクササイズです。<br/>
          知覚・感覚＝脳へのアプローチで、運動が苦手な方でも、楽しく心地よいレッスンを通して、体感習慣が身につき、自分史上最高のパフォーマンスを実現します。<br/>
          10年後も動ける軽やかな身体で、あなたは何を始めたいですか？
        </MotionText>
      </div>
      
      <MotionBox className={ "mx-auto md:w-[90%]" }>
        <Button02/>
      </MotionBox>
    </section>
  );
};