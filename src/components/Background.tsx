"use client";
import { useState, useEffect } from "react";

export default function Background()  {
  // States
  const [documentSize, setDocumentSize] = useState<{ width: number; height: number; }>();
  // Effects
  useEffect(() => {
    if (document) {
      const resize = () => {
        setDocumentSize({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        });
      };
      resize();
      window.addEventListener("resize", resize);
      // CleanUp
      return () => {
        window.removeEventListener("resize", resize);
      }
    }
  }, []);
  // Render
  return (
    <div 
      className={ "fixed top-0 left-0 -z-10 bg-cover" }
      style={{
        width: documentSize?.width,
        height: documentSize?.height,
        background: process.env.NODE_ENV === "production" ? "url(./bg-img.jpg)" : "url(/bg-img.jpg)"
      }}
    ></div>
  );
};