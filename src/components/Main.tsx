"use client";
import { ReactNode } from "react";
import { AnimatePresence, motion,  } from "framer-motion";

export default function Main({ ...props }: { children: ReactNode}) {
  return (
    <AnimatePresence>
      <motion.div>
        { props.children }
      </motion.div>
    </AnimatePresence>
  );
}