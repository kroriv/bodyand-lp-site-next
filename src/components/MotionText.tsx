import { ComponentProps } from "react";

export default function MotionText({ ...props }: ComponentProps<"p">) {
  // Render
  return (
    <p { ...props }>
      { props.children }
    </p>
  );
}