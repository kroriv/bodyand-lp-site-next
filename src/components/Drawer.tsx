"use client";
import { useState } from "react";
import { Turn as _Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Drawer() {
  // States
  const [isOpen, setOpen] = useState<boolean>(false);
  // Render
  return (
    <>
      <div className={ "fixed top-0 right-0 mr-[5%] mt-[5%] w-[60px] h-[60px] rounded-full bg-white z-50 xl:hidden flex justify-center items-center" }>
        <_Hamburger 
          toggled={ isOpen } 
          toggle={ setOpen }
          color={ "#e96b21" }
          size={ 28 }
        />
      </div>
      <AnimatePresence>
        { isOpen &&
        <motion.div 
          id={ "drawer" }
          className={ "fixed top-0 left-0 w-full h-screen bg-white z-40 flex justify-center items-center" }
          initial={{ opacity: 0, y: 2000 }}
          //animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -1200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 2000 }}
          transition={{ duration: 0.5 }}
        >
          <div className={ "flex flex-col gap-[30px] " }>
            <AnchorLink 
              href={ "#section-02" }
              className={ "text-20ptr font-bold whitespace-nowrap leading-none hover:opacity-60" }
              onClick={ () => setOpen(false) }
            >
              ABOUT | ブリ―ビクスについて
            </AnchorLink>
            <AnchorLink 
              href={ "#section-04" }
              className={ "text-20ptr font-bold whitespace-nowrap leading-none hover:opacity-60" }
              onClick={ () => setOpen(false) }
            >
              DATA | 数字で見る生徒さんの声
            </AnchorLink>
            <AnchorLink
              href={ "#section-05" }
              className={ "text-20ptr font-bold whitespace-nowrap leading-none hover:opacity-60" }
              onClick={ () => setOpen(false) }
            >
              MENU | メニュー
            </AnchorLink>
            <AnchorLink
              href={ "#section-07" }
              className={ "text-20ptr font-bold whitespace-nowrap leading-none hover:opacity-60" }
              onClick={ () => setOpen(false) }
            >
              MESSAGE | ごあいさつ
            </AnchorLink>
            <AnchorLink 
              href={ "#section-08" }
              className={ "text-20ptr font-bold whitespace-nowrap leading-none hover:opacity-60" }
              onClick={ () => setOpen(false) }
            >
              ACCESS | アクセス
            </AnchorLink>
            <AnchorLink
              href={ "#section-09" }
              className={ "text-20ptr font-bold whitespace-nowrap leading-none hover:opacity-60" }
              onClick={ () => setOpen(false) }
            >
              CONTACT | お問い合わせ
            </AnchorLink>
          </div>
        </motion.div>
        }
      </AnimatePresence>
    </>
  );
}