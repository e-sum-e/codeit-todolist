"use client";

import { ReactNode } from "react";

export enum ButtonType {
  SECONDARY = "secondary",
  DANGER = "danger",
  PRIMARY = "primary",
  SUCCESS = "success",
}

interface Props {
  icon: ReactNode;
  text?: string;
  type: ButtonType;
}

export default function TextButton({ icon, text, type }: Props) {
  return (
    <button
      className={`inline-flex justify-center items-center gap-[4px] leading-[18px]
        border-2 border-solid  border-slate-900 rounded-[24px] shadow-[4px_4px_0_0] shadow-slate-900
        p-[16px] ${text && "w-[164px]"} 
        bg-button-${type}`}
    >
      {icon}
      {text}
    </button>
  );
}
