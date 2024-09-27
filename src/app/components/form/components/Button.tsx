import { IButtonProps } from "@/app/types";
import React from "react";

export default function Button({
  label,
  onClick,
  variant = "primary",
  fullWidth,
  className,
  disable,
}: IButtonProps) {
  const style =
    variant === "primary"
      ? "border-white bg-primaryDark "
      : "border-secondary ";
  return (
    <button
      onClick={onClick}
      className={`hover:brightness-90 font-bold text-md p-2 border-2 rounded-xl transition-all duration-800 disabled:hover:brightness-100 disabled:cursor-not-allowed disabled:bg-slate-500  ${style} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      type="submit"
      disabled={disable}
    >
      {label}
    </button>
  );
}
