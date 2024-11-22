"use client";
import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function MenuNavigator({ ...props }: { children: ReactNode }) {
  // 現在のブレイクポイントを取得するカスタムフック
  const breakpoint = useBreakpoint();
  // 表示条件: ブレイクポイントが xl 以上のときにナビゲーションを表示
  const isVisible = ["xl", "2xl"].includes(breakpoint);
  // Render
  return (
    <AnimatePresence>
      { isVisible && (
      <motion.nav 
        className={ "fixed top-0 left-0 w-[310px] h-[1000px] pt-[50px] pl-[50px]" }
        initial={{ opacity: 0, x: -1200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -1200 }}
        transition={{ duration: 0.5 }}
      >
        <div className={ "mb-[80px]" }>
          <AnchorLink 
              href={ "#section-00" }
              className={ "text-17ptr font-bold whitespace-nowrap leading-none hover:opacity-60 transition-opacity duration-500" }
            >
              { props.children }
            </AnchorLink>
        </div>
        <div className={ "flex flex-col gap-[30px] " }>
          <AnchorLink 
            href={ "#section-02" }
            className={ "text-17ptr font-bold whitespace-nowrap leading-none hover:opacity-60 transition-opacity duration-500" }
          >
            ABOUT | ブリ―ビクスについて
          </AnchorLink>
          <AnchorLink 
            href={ "#section-04" }
            className={ "text-17ptr font-bold whitespace-nowrap leading-none hover:opacity-60 transition-opacity duration-500" }
          >
            DATA | 数字で見る生徒さんの声
          </AnchorLink>
          <AnchorLink
            href={ "#section-05" }
            className={ "text-17ptr font-bold whitespace-nowrap leading-none hover:opacity-60 transition-opacity duration-500" }
          >
            MENU | メニュー
          </AnchorLink>
          <AnchorLink
            href={ "#section-07" }
            className={ "text-17ptr font-bold whitespace-nowrap leading-none hover:opacity-60 transition-opacity duration-500" }
          >
            MESSAGE | ごあいさつ
          </AnchorLink>
          <AnchorLink 
            href={ "#section-08" }
            className={ "text-17ptr font-bold whitespace-nowrap leading-none hover:opacity-60 transition-opacity duration-500" }
          >
            ACCESS | アクセス
          </AnchorLink>
          <AnchorLink
            href={ "#section-09" }
            className={ "text-17ptr font-bold whitespace-nowrap leading-none hover:opacity-60 transition-opacity duration-500" }
          >
            CONTACT | お問い合わせ
          </AnchorLink>
        </div>
      </motion.nav>
      )}
    </AnimatePresence>
  );
}