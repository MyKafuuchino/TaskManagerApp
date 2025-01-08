import { ReactNode } from "react";

interface ButtonIconProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function IconButton({ children, className, onClick }: ButtonIconProps) {
  return (
    <button
      className={`bg-primary p-2 h-fit rounded-md ${className} btn`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
