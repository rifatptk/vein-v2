import React from "react";
import { BsArrowRight } from "react-icons/bs";

function RiButton({ type = "button", text, className, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-4 bg-white p-2 pl-5 w-fit rounded-full rounded-se-none shadow-lg group ${className}`}
    >
      <span className="font-semibold group-hover:text-red-500">{text}</span>
      <span className="p-2 bg-red-500 rounded-full rounded-se-none text-white group-hover:scale-[1.1]">
        <BsArrowRight />
      </span>
    </button>
  );
}

export default RiButton;
