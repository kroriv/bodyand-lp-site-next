"use client";
import Image from "next/image";
import { useState, useEffect, ReactNode } from "react";
import MotionBox from "@/components/MotionBox";
import MotionText from "@/components/MotionText";

export default function Section05() {
  // Render
  return (
    <section id={ "section-05" } className={ "bg-[#f7921e] pt-[45px] md:pt-[90px] pb-[50px] md:pb-[100px] px-[calc(100%*(1/15))]" }>
      <MotionBox className={ "flex flex-col justify-center items-center mb-[40px] md:mb-[80px]" }>
        <h2 className={ "font-poppins font-semibold text-40ptr md:text-80ptr text-white leading-none tracking-wider mb-2" }>MENU</h2>
        <span className={ "font-semibold text-white text-15ptr md:text-24ptr tracking-wide leading-none" }>メニュー</span>
      </MotionBox>
      <div className={ "flex flex-col gap-y-[15px] md:gap-y-[30px]" }>
        <Content>
          <H4>初めての方でも安心の少人数制</H4>
          <H3>【グループレッスン】</H3>
          <div className={ "flex flex-col gap-y-[20px] md:gap-y-[40px] w-full" }>
            <MotionBox className={ "relative flex gap-[2%] justify-stretch items-start md:items-start w-full md:max-h-[90px]" }>
              <div className={ "justify-center h-full basis-[28%] md:w-[148px] flex" }>
                <div className={ "w-[28%] md:w-[150px] h-[85%] md:h-full absolute top-0 bottom-[20%] flex flex-col justify-center items-center bg-[#3c3c3c] rounded-md" }>
                  <p className={ "flex justify-center items-center text-14ptr md:text-32ptr text-white font-medium whitespace-nowrap leading-none" }>月<span className={ "text-14ptr md:text-40ptr leading-none" }>４</span>回</p>
                </div>
              </div>
              <div className={ "basis-[72%] md:w-[348px] flex justify-center items-center w-full" }>
                <Image
                  src={ "/sec-menu_price6000.png" }
                  alt={ "" }
                  width={ 348 }
                  height={ 110 }
                  className={ "block" }
                />
              </div>
            </MotionBox>
            <MotionText className={ "flex justify-center items-center text-13ptr md:text-26ptr font-bold leading-none" }>(1回あたり90分／1,500円)</MotionText>
          </div>
          <MotionText className={ "gap-y-[20px] text-14ptr md:text-30ptr font-bold tracking-normal leading-relaxed -mt-[10px]" }>インストラクターの目が行き届く少人数制です。休んだ分は振替制度をご活用いただけます。</MotionText>
          <MotionBox className={ "flex w-full gap-[20px]" }>
            <Circle>
              入会金<br/>年会費<br/>不要
            </Circle>
            <Circle>
              少人数制
            </Circle>
            <Circle>
              完全<br/>予約制
            </Circle>
          </MotionBox>
        </Content>
        
        <Content>
          <H4>友達・家族と気兼ねなくレッスン</H4>
          <H3>【パーソナルレッスン】</H3>
          <div className={ "flex flex-col gap-y-[15px] md:gap-y-[30px] " }>
            <MotionBox className={ "relative flex gap-x-[.0%] justify-start items-start md:items-start w-full max-h-[111px]" }>
              <div className={ "flex basis-[31%] justify-center md:w-[165px] max-w-[164px] h-full max-h-[111px]" }>
                <div className={ "w-[26%] md:w-[150px] md:h-[80%] absolute top-0 bottom-[20%] flex flex-col justify-center items-center bg-[#3c3c3c] rounded-md" }>
                  <p className={ "text-14ptr md:text-30ptr text-white font-medium whitespace-nowrap leading-snug" }>
                  <span className={ "text-14ptr md:text-40ptr leading-none" }>60</span>分</p>
                </div>
              </div>
              <div className={ "basis-[69%] flex justify-end items-center w-full max-w-[368px] max-h-[111px]" }>
                <Image
                  src={ "/sec-menu_price6000-02.png" }
                  alt={ "￥6,000" }
                  width={ 360 }
                  height={ 111 }
                  className={ "block md:h-[111px]" }
                />
              </div>
            </MotionBox>
            
            <MotionBox className={ "flex justify-center items-center" }>
              <Image
                src={ "/sec-menu_arrow.png" }
                alt={ "矢印" }
                width={ 106 }
                height={ 40 }
              />
            </MotionBox>
            
            <MotionBox className={ "relative flex gap-x-[.5%] justify-start items-start md:items-start w-full max-h-[164px]" }>
              <div className={ "basis-[31%] flex justify-start h-full max-w-[165px] max-h-[164px]" }>
                <Image
                  src={ "/sec-menu_bommark.png" }
                  alt={ "ペア割" }
                  width={ 164 }
                  height={ 166 }
                  className={ "block" }
                />
              </div>
              <div className={ "basis-[69%] flex justify-end items-center w-full max-w-[368px] max-h-[164px]" }>
                <Image
                  src={ "/sec-menu_price4000-02.png" }
                  alt={ "￥4,000" }
                  width={ 368 }
                  height={ 164 }
                  className={ "block md:h-[164px]" }
                />
              </div>
            </MotionBox>
            
            <MotionText className={ "text-14ptr md:text-30ptr font-bold tracking-wide leading-relaxed" }>あなたの目的や症状改善に向けたプログラムをご提案。最適な身体づくりをマンツーマンでサポートします。</MotionText>
            <MotionBox className={ "flex w-full gap-[20px]" }>
              <Circle>
                入会金<br/>年会費<br/>不要
              </Circle>
              <Circle>
                ペア割あり
              </Circle>
              <Circle>
                完全<br/>予約制
              </Circle>
            </MotionBox>
          </div>
        </Content>
        
        <Content hasRibbon>
          <div className={ "flex flex-col gap-y-[20px] md:gap-y-[40px] w-full" }>
            <MotionBox className={ "flex justify-center items-center w-[80%] md:w-full mx-auto" }>
              <Image
                src={ "/sec-menu_title.png" }
                alt={ "体験レッスン受付中" }
                width={ 438 }
                height={ 50 }
                className={ "block" }
              />
            </MotionBox>
            <MotionBox className={ "relative flex gap-x-[2%] md:gap-x-0 justify-between items-center w-full h-[80px] md:h-[130px] max-h-[130px]" }>
              
              <div className={ "basis-[31%] flex justify-center h-full max-h-[130px] relative " }>
                <div className={ "aspect-square max-h-[130px] h-full absolute top-0 bottom-0 flex flex-col justify-center items-center bg-[#e53573] rounded-full" }>
                  <div className={ "max-h-[130px] aspect-square flex flex-col justify-center items-center w-full h-full after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:m-auto after:border-white after:border-solid after:border-[2px] after:w-[95% after:h-[95%] after:aspect-square after:rounded-full" }>
                    <p className={ "text-white font-medium leading-tight tracking-wider" }>初回</p>
                    <p className={ "text-white font-medium leading-tight tracking-wider" }>体験</p>
                  </div>
                </div>
              </div>
              
              <div className={ "basis-[69%] flex justify-end items-center w-full md:h-[130px] max-w-[368px] max-h-[130px]" }>
                <Image
                  src={ "/sec-menu_price1500-02.png" }
                  alt={ "" }
                  width={ 368 }
                  height={ 119 }
                  className={ "block" }
                />
              </div>
            </MotionBox>
            <MotionText className={ "flex justify-center items-center text-13ptr md:text-26ptr font-semibold leading-none" }>(無料レクチャー15分+レッスン90分)</MotionText>
          </div>
          <MotionText className={ "text-14ptr md:text-30ptr font-bold tracking-wide leading-relaxed" }>スタジオの雰囲気やレッスンを体験してみませんか。ご興味のある方、迷われている方、お待ちしています。</MotionText>
          <MotionBox className={ "flex flex-col gap-[10px] md:gap-[15px] w-full" }>
            <p className={ "md:text-24ptr text-left font-semibold tracking-normal" }>【ご準備いただくもの】</p>
            <p className={ "md:text-24ptr text-left font-semibold tracking-normal" }>動きやすい服装／タオル／ヨガマット(貸出は¥100)</p>
          </MotionBox>
        </Content>
        
      </div>
    </section>
  );
};

const Content = ({ ...props }: { children: ReactNode; hasRibbon?: boolean; }) => {
  // States
  const [ribbonPositionLeft, setRibbonPositionLeft] = useState<number>(0);
  // Effects
  useEffect(() => {
    const resize = () => {
      const box = document.querySelector(".menu-box-wrap");
      const ribbon = document.querySelector(".ribbon");
      if (box && ribbon) {
        const parentRect = box.getBoundingClientRect();
        const childRect = ribbon.getBoundingClientRect();
        setRibbonPositionLeft(() => childRect.left - parentRect.left);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  
  return (
    <div className={ "menu-box-wrap relative" }>
      <MotionBox className={ "menu-content relative z-10 flex flex-col justify-center gap-y-[20px] md:gap-y-[40px] items-center py-[30px] md:py-[60px] px-[8%] bg-white rounded-3xl before:content-[''] before:inline-block before:absolute before:-top-[16px] before:-left-[18px] before:bg-[url(/sec-menu_ribbon.png)] before:bg-[0px_-0px] before:bg-no-repeat before:w-full before:h-auto before:z-[-1]" }>
        { props.children }
      </MotionBox>
      { props.hasRibbon && 
      <Image 
        src={ "/sec-menu_ribbon.png" } 
        alt={ "リボン" } 
        //width={ 750 }
        //height={ 185 }
        width={ 206 }
        height={ 185 }
        //className={ "ribbon absolute -left-[calc(100%*(16/100/6))] w-full md:w-full h-auto z-10" } 
        className={ "ribbon absolute -left-[calc(100%*(17.5/100/6))] w-full md:w-full h-auto z-10 scale-[0.311] origin-top-left" } 
        style={{ 
          top: ribbonPositionLeft * 17 / 19
        }}
      />
      }
    </div>
  );
};

const H3 = ({ ...props }: { children: ReactNode; underline?: boolean;}) => {
  return (
    <>
      { !props.underline ?
      <MotionText className={ "relative text-18ptr md:text-36ptr font-bold leadong-none" }>
        { props.children }
      </MotionText>
      :
      <MotionText className={ "relative text-18ptr md:text-36ptr font-bold pb-[15px] md:pb-[4.5%] mb-[30px] md:mb-[60px] after:content-[''] after:bg-[#ee6842] after:h-[3px] md:after:h-[4px] after:absolute after:w-[30%] after:left-[calc(40%)] after:-bottom-0" }>
        { props.children }
      </MotionText>
      }
    </>
  );
};

const H4 = ({ ...props }: { children: ReactNode }) => {
  return (
    <MotionText className={ "flex justify-center items-center bg-[#8fc320] w-full py-[19px] rounded-full text-white text-16ptr md:text-32ptr font-medium tracking-normal leading-none" }>
      { props.children }
    </MotionText>
  );
};

const Circle = ({ ...props }: { children: ReactNode }) => {
  return (
    <p className={ " aspect-square relative w-full basis-[33.333%] flex justify-center items-center rounded-[50%] bg-[#8fc320] text-center text-white text-13ptr md:text-30ptr font-bold leading-tight" }>
      { props.children }
    </p>
  );
};