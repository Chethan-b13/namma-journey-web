import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Content inside the button
  className?: string; // Additional styles
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>; // Click handler
  type?: "button" | "submit" | "reset"; // Button type
  disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg text-center w-full h-[48px] transition-all text-regular ${
        disabled && "bg-gray-400 text-gray-200 cursor-not-allowed"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
