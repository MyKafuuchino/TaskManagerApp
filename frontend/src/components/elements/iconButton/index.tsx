import { ReactNode } from "react";

interface ButtonIconProps {
  children: ReactNode;
  className?: string;
}

function IconButton({ children, className }: ButtonIconProps) {
  return (
    <button className={`bg-primary p-2 h-fit rounded-md ${className}`}>
      {children}
    </button>
  );
}

export default IconButton;
