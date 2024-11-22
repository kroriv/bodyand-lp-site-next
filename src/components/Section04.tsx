import Image from "next/image";
import { ReactNode } from "react";
import MotionBox from "@/components/MotionBox";
import MotionText from "@/components/MotionText";

export default function Section04() {
  // Render
  return (
    <section id={ "section-04" } className={ "bg-[#fee3c8] pt-[45px] md:pt-[90px] pb-[50px] md:pb-[100px] px-[calc(100%*(1/15))]" }>
      <MotionBox className={ "flex flex-col gap-y-[18px] justify-center items-center mb-[40px] md:mb-[80px]" }>
        <h2 className={ "font-poppins font-semibold text-40ptr md:text-80ptr tracking-wider leading-none" }>DATA</h2>
        <span className={ "font-bold text-15ptr md:text-26ptr tracking-wide leading-none" }>数字で見る生徒さんの声</span>
      </MotionBox>
      <div className={ "flex flex-col gap-[15px] md:gap-[30px]" }>
        <Content title={ "Q1 レッスンの満足度は？" }>
          <Image
            src={ "/sec-data_g01.png" }
            alt={ "" }
            width={ 630 }
            height={ 534 }
          />
          <p className={ "flex w-full justify-end text-12ptr md:text-14ptr font-medium tracking-wide pr-[30px] md:pr-[60px] mt-[10px]" }>2024年自社調べ</p>
        </Content>
        <Content title={ "Q2 始めたきっかけは？" }>
          <Image
            src={ "/sec-data_g02.png" }
            alt={ "" }
            width={ 630 }
            height={ 534 }
          />
        </Content>
        <Content title={ "Q3 どのくらい続いてますか？" }>
          <Image
            src={ "/sec-data_g03.png" }
            alt={ "" }
            width={ 630 }
            height={ 534 }
          />
          <p className={ "flex w-full justify-end text-12ptr md:text-14ptr font-medium tracking-wide pr-[30px] md:pr-[60px] mt-[10px]" }>2024年自社調べ</p>
          <div className={ "flex flex-col gap-[15px] md:gap-[30px] justify-start items-start w-full px-[9%]" }>
            <p className={ "text-15ptr md:text-26ptr font-medium w-full leading-none" }>【継続理由】</p>
            <div className={ "flex flex-col gap-[15px] md:gap-[20px] list-none -pl-[20px]" }>
              <Q3ListItem>
                自分のためになっていると感じられて<span className={ "text-[#fe8400] font-bold" }>楽しい。</span>
              </Q3ListItem>
              <Q3ListItem>
                <span className={ "text-[#fe8400] font-bold" }>身体が進化し続ける</span>のがおもしろい。
              </Q3ListItem>
              <Q3ListItem>
                無理なく続けられて、<span className={ "text-[#fe8400] font-bold" }>自分の体のバランスや使い方などを知ることができる</span>のが良いです。
              </Q3ListItem>
              <Q3ListItem>
                続けていると体の調子が良くなって、<span className={ "text-[#fe8400] font-bold" }>仕事や趣味のパフォーマンスが上がる</span>ので、楽しく続けられてます。
              </Q3ListItem>
              <Q3ListItem>
                自分では分からない<span className={ "text-[#fe8400] font-bold" }>身体のバランスを教えてもらえる。</span>休むと不調になるから。
              </Q3ListItem>
              <Q3ListItem>
                <span className={ "text-[#fe8400] font-bold" }>レッスン後の爽快感が最高！</span>気持ちいい。
              </Q3ListItem>
              <Q3ListItem>
                少しずつ動かすことで<span className={ "text-[#fe8400] font-bold" }>身体が柔らかくなり、楽になる</span>から。
              </Q3ListItem>
              <Q3ListItem>
                続けていると、<span className={ "text-[#fe8400] font-bold" }>確実に体が変化して調子が良くなる。</span>
              </Q3ListItem>
            </div>
          </div>
        </Content>
      </div>
    </section>
  );
};

const Content = ({ ...props }: { title: string; children: ReactNode; }) => {
  return (
    <MotionBox className={ "flex flex-col justify-center items-center py-[30px] md:py-[60px] bg-white rounded-3xl" }>
      <MotionText className={ "text-16ptr md:text-32ptr font-bold tracking-wide mb-[40px]" }>{ props.title }</MotionText>
      { props.children }
    </MotionBox>
  );
};

const Q3ListItem = ({ ...props }: { children: ReactNode; }) => {
  return (
    <MotionBox className={ "text-14ptr md:text-26ptr font-medium tracking-wide leading-snug pl-[10px] md:pl-[18px] -indent-[10px] md:-indent-[24px] before:content-['・'] md:before:px-[2px] before:mr-[4px] md:before:mr-[6px]" }>
      { props.children }
    </MotionBox>
  );
}