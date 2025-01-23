"use client";

import DefaultCheckboxIcon from "../../assets/icon/default-checkbox.svg";
import CheckBoxIcon from "../../assets/icon/checkbox.svg";
import { useState } from "react";

interface Props {
  title: string;
  // isDone: boolean;
}

export default function DetailCheckListItem({ title }: Props) {
  const [isDone, setIsDone] = useState(false);

  const toggleIsDone = () => {
    setIsDone(!isDone);
  };

  return (
    <li
      className={`flex justify-center items-center gap-[16px] p-[14px]
    border-[2px] border-solid border-slate-900 rounded-[24px]
    text-[20px] font-[700] underline ${isDone && "bg-violet-100"}`}
    >
      <button
        className={`[&>svg]:w-[32px] [&>svg]:h-[32px]`}
        onClick={toggleIsDone}
      >
        {isDone ? <CheckBoxIcon /> : <DefaultCheckboxIcon />}
      </button>
      {title}
    </li>
  );
}
