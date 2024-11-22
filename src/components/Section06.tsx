import Image from "next/image";
import { ReactNode } from "react";
import MotionBox from "@/components/MotionBox";

export default function Section06() {
  // Render
  return (
    <section id={ "section-06" } className={ "bg-white pt-[45px] md:pt-[90px] pb-[50px] md:pb-[100px] px-[calc(100%*(1/15))]" }>
      <MotionBox className={ "flex flex-col gap-y-[18px] justify-center items-center mb-[40px] md:mb-[80px]" }>
        <h2 className={ "font-poppins font-bold text-40ptr md:text-80ptr leading-none tracking-wider" }>VOICE</h2>
        <span className={ "font-bold text-15ptr md:text-26ptr tracking-wide leading-none" }>生徒さんの声</span>
      </MotionBox>
      
      <div className={ "flex flex-col space-y-[6%]" }>
        <Content>
          <MotionBox className={ "relative after:content-[''] after:w-full after:absolute after:border-b-[3px] md:after:border-b-[5px] after:border-dotted after:border-[#333333] after:pb-[20px]" }>
            <p className={ "text-15ptr md:text-30ptr font-semibold tracking-wide leading-relaxed" }>
              レッスンが終わった後は<span className={ "text-[#ff8300] font-bold" }>身体の変な力が抜けて気持ち良い。</span>ずっとこんな感じでいたいし、ブリ―ビクスしてると、お母さんのお手伝いが素直に出来そう。
            </p>
          </MotionBox>
          <div className={ "flex gap-[5%] justify-stretch items-stretch w-full" }>
            <MotionBox className={ "flex" }>
              <Image
                src={ "/sec-voice_face01.png" }
                alt={ "" }
                width={ 110 }
                height={ 110 }
                className={ "aspect-square" }
              />
            </MotionBox>
            <MotionBox className={ "flex flex-col gap-[12%] justify-center" }>
              <p className={ "text-15ptr md:text-26ptr font-semibold" }>10代女性 | 学生</p>
              <p className={ "text-13ptr md:text-23ptr font-semibold" }>継続期間:1～2年以上</p>
            </MotionBox>
          </div>
        </Content>
        
        <Content>
          <MotionBox className={ "relative after:content-[''] after:w-full after:absolute after:border-b-[3px] md:after:border-b-[5px] after:border-dotted after:border-[#333333] after:pb-[20px]" }>
            <p className={ "text-15ptr md:text-30ptr font-semibold tracking-wide leading-relaxed" }>
              ヘルニア予防のために通うようになって約6年、もともと身体が強張りやすく、仕事で業務が重なると腰が病める時はありますが、<span className={ "text-[#ff8300] font-bold" }>今のところヘルニアは1度も再発していません。</span>
            </p>
          </MotionBox>
          <div className={ "flex gap-[5%] justify-stretch items-stretch w-full" }>
            <MotionBox className={ "flex" }>
              <Image
                src={ "/sec-voice_face02.png" }
                alt={ "" }
                width={ 110 }
                height={ 110 }
                className={ "aspect-square" }
              />
            </MotionBox>
            <MotionBox className={ "flex flex-col gap-[12%] justify-center" }>
              <p className={ "text-15ptr md:text-26ptr font-semibold" }>30代女性 | 保育士</p>
              <p className={ "text-13ptr md:text-23ptr font-semibold" }>継続期間:5年以上</p>
            </MotionBox>
          </div>
        </Content>
        
        <Content>
          <MotionBox className={ "relative after:content-[''] after:w-full after:absolute after:border-b-[3px] md:after:border-b-[5px] after:border-dotted after:border-[#333333] after:pb-[20px]" }>
            <p className={ "text-15ptr md:text-30ptr font-semibold tracking-wide leading-relaxed" }>
              1週レッスンをお休みすると、テキメンに身体の硬さを感じてしまうので、振替も使いながら、<span className={ "text-[#ff8300] font-bold" }>週1でレッスンを受けるようにしてます</span>。
            </p>
          </MotionBox>
          <div className={ "flex gap-[5%] justify-stretch items-stretch w-full" }>
            <MotionBox className={ "flex" }>
              <Image
                src={ "/sec-voice_face03.png" }
                alt={ "" }
                width={ 110 }
                height={ 110 }
                className={ "aspect-square" }
              />
            </MotionBox>
            <MotionBox className={ "flex flex-col gap-[12%] justify-center" }>
              <p className={ "text-15ptr md:text-26ptr font-semibold" }>40代女性 | 主婦</p>
              <p className={ "text-13ptr md:text-23ptr font-semibold" }>継続期間:5年以上</p>
            </MotionBox>
          </div>
        </Content>
      </div>
      
    </section>
  );
};

const Content = ({ ...props }: { children: ReactNode; }) => {
  return (
    <MotionBox className={ "relative flex flex-col space-y-[60px] justify-center items-center py-[42px] px-[8%] bg-white rounded-3xl border-[3px] border-solid border-[#ff8300] after:content-[''] after:bg-[url(/sec-voice_dots.png)] after:bg-center after:bg-no-repeat after:bg-contain after:absolute after:-top-[3%] after:-left-[1%] after:block after:w-[9%] after:h-fit after:aspect-square" }>
      { props.children }
    </MotionBox>
  );
};