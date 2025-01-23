"use client";

import { ButtonType } from "@/app/utils/type";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text?: string;
  type: ButtonType;
  style?: string;
}

export default function TextButton({ icon, text, type, style }: Props) {
  return (
    <button
      className={`inline-flex justify-center items-center gap-[4px] leading-[18px]
        border-2 border-solid  border-slate-900 rounded-[24px] shadow-[4px_4px_0_0] shadow-slate-900
        p-[16px] 
        md:"w-[164px]"} 
        bg-button-${type}
        ${style}
        `}
    >
      {icon}
      <div className="hidden md:block">{text}</div>
    </button>
  );
}
