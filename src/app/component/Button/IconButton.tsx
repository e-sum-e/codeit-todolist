"use client";

import { ReactNode } from "react";
import { ButtonType } from "./Button";

interface Props {
  icon: ReactNode;
  type: ButtonType;
}

export default function IconButton({ icon, type }: Props) {
  return (
    <button
      className={`inline-flex justify-center items-center p-[22px]
        border-2 border-solid  border-slate-900 rounded-[50%]
        bg-button-${type}`}
    >
      {icon}
    </button>
  );
}
