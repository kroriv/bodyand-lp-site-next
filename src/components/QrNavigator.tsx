"use client";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function QrNavigator({ ...props }: { children: ReactNode }) {
  // 現在のブレイクポイントを取得するカスタムフック
  const breakpoint = useBreakpoint();
  // 表示条件: ブレイクポイントが xl 以上のときにナビゲーションを表示
  const isVisible = ['xl', '2xl'].includes(breakpoint);
  // Render
  return (
    <AnimatePresence>
      { isVisible && (
      <motion.div 
        className={ "fixed bottom-0 right-0 w-[200px] h-[200px] mb-[50px] mr-[50px] bg-white flex flex-col justify-between items-center p-[20px]" }
        initial={{ opacity: 0, x: 1200 }}
        //animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -1200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 1200 }}
        transition={{ duration: 0.5 }}
        //style={{ display: isVisible ? 'block' : 'none' }} // 非表示のとき display: none
      >
        <p className={ "text-16ptr text-[#06c94f] text-center font-bold whitespace-nowrap leading-tight" }>お問い合せ・体験予約は<br/>公式LINEからどうぞ</p>
        { props.children }
      </motion.div>
      )}
    </AnimatePresence>
  );
}