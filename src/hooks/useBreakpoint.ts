import { useState, useEffect } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

// Tailwindのコンフィグを取得
const fullConfig = resolveConfig(tailwindConfig);

// ブレイクポイントを取得
const breakpoints = fullConfig.theme.screens;

// pxの単位を取り除くヘルパー関数
const parseBreakpointValue = (value: string) => parseInt(value.replace('px', ''), 10);

export default function useBreakpoint() {
  // States
  const [breakpoint, setBreakpoint] = useState<string>("default");
  // Effects
  useEffect(() => {
    // 現在のウィンドウサイズに対応するブレイクポイント名を取得
    function getCurrentBreakpoint() {
      const width = window.innerWidth;
      // 各ブレイクポイントのエントリを配列に変換し、数値順にソート
      const sortedBreakpoints = Object.entries(breakpoints).sort(
        ([, sizeA], [, sizeB]) => parseBreakpointValue(sizeA) - parseBreakpointValue(sizeB)
      );
      // ウィンドウサイズが対応する最小のブレイクポイントを見つける
      for (const [name, size] of sortedBreakpoints) {
        if (width >= parseBreakpointValue(size)) {
          setBreakpoint(name);
        }
      }
    }
    
    // 初回実行
    getCurrentBreakpoint();
    // リサイズ時にブレイクポイントを更新
    window.addEventListener("resize", getCurrentBreakpoint);
    // クリーンアップ
    return () => {
      window.removeEventListener("resize", getCurrentBreakpoint);
    }
  }, []);
  
  return breakpoint;
};