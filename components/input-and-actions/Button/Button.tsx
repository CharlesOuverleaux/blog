import clsx from "clsx";
import React, { FC } from "react";

interface ButtonProps {
  ctaText: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, ctaText, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        disabled ? "bg-gray-500" : "bg-[#052330]",
        "text-white px-4 py-3 text-sm font-semibold rounded-md"
      )}
    >
      {ctaText}
    </button>
  );
};

export default Button;
