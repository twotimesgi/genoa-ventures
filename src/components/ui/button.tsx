"use client" 
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "mentorButton";
  variant?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
  disabled?: boolean
}

export const Button = ({
  children,
  className,
  onClick,
  size = "md",
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
    disabled={disabled}
    type={type}
    // TODO: implement onClick animation
    onClick={onClick}
      className={classNames(
        "px-5 rounded-[4px] font-semibold capitalize shadow-sm transition duration-300 ease-in-out",
        {
          "py-3 text-base": size == "sm",
          "py-4 text-lg": size == "md",
          "py-2 px-6 text-base font-normal": size == "mentorButton",
          "text-white bg-primary border border-transparent hover:bg-[#FA6339]":
            variant == "primary",
          "text-foreground bg-white border border-[#D0D5DD] hover:bg-backgroundLighter":
            variant == "secondary",
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
