import { ComponentProps } from "react";

export default function MotionBox({ ...props }: ComponentProps<"div">) {
  // Render
  return (
    <div { ...props }>
      { props.children }
    </div>
  );
}