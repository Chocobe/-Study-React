import React, {
  MouseEventHandler,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from "react";

import "./MyButton.scss";

export type MyButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  bgColor?: "success" | "fail";
};

function MyButton({ 
  children,
  className,
  onClick,
  bgColor = "success",
}: MyButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <button 
      className={["MyButton", bgColor, className].join(" ")}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default forwardRef(MyButton);