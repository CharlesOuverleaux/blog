import React, { FC } from "react";

interface ButtonProps {
  ctaText: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, ctaText }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#052330] text-white px-4 py-3 text-sm font-semibold rounded-md"
    >
      {ctaText}
    </button>
  );
};

export default Button;
