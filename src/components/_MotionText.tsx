"use client";
import { useEffect } from "react";
import { motion, useAnimation, AnimatePresence, HTMLMotionProps, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MotionText({ ...props }: HTMLMotionProps<"div">) {
  // Animation
  const control = useAnimation();
  // InView
  const [ref, isInView] = useInView({ triggerOnce: true} );
  // Variants
  const scrollVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        type: "spring",
      },
    },
    hidden: {
      y: 40,
      opacity: 0,
    },
  } as Variants;
  // Effects
  useEffect(()=>{
      if(isInView){
        control.start("visible");
      }
      if(!isInView){ //画面外に外れた際のcontrolを"hidden"にする処理を追加
        control.start("hidden");
      }
    },
    [isInView, control]
  );
  
  // Render
  return (
    <AnimatePresence>
      <motion.p 
        ref = { ref }
        variants = { scrollVariants }
        initial = { "hidden" }
        animate = { control } 
        { ...props }
      >
        { props.children }
      </motion.p>
    </AnimatePresence>
  );
}