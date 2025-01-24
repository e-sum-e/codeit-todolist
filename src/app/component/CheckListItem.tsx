"use client";

import DefaultCheckboxIcon from "../../assets/icon/default-checkbox.svg";
import CheckBoxIcon from "../../assets/icon/checkbox.svg";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  isCompleted: boolean;
  toggleIsCompleted: (id: number) => void;
}

export default function CheckListItem({
  id,
  name,
  isCompleted,
  toggleIsCompleted,
}: Props) {
  const toggleIsDone = () => {
    toggleIsCompleted(id);
  };

  return (
    <li
      className={`flex items-center gap-[16px] p-[8px_10px]
    border-[2px] border-solid border-slate-900 rounded-[27px]
    font-regular-16 ${isCompleted && "line-through bg-violet-100"}`}
    >
      <button
        className={`[&>svg]:w-[32px] [&>svg]:h-[32px]`}
        onClick={toggleIsDone}
      >
        {isCompleted ? <CheckBoxIcon /> : <DefaultCheckboxIcon />}
      </button>
      <Link href={`/${id}`} className="w-[100%]">
        {name}
      </Link>
    </li>
  );
}
