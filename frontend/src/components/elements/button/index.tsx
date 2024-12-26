import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  isBtnToCloseModal?: boolean;
}

function Button({
  className = "",
  children,
  isBtnToCloseModal = false,
}: ButtonProps) {
  return isBtnToCloseModal ? (
    <label htmlFor="create_task" className={`btn ${className}`}>
      {children}
    </label>
  ) : (
    <button className={`btn ${className}`}>{children}</button>
  );
}

export default Button;
