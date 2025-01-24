"use client";

import DefaultCheckboxIcon from "../../assets/icon/default-checkbox.svg";
import CheckBoxIcon from "../../assets/icon/checkbox.svg";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function CheckListItem({ id, name, isCompleted }: Props) {
  const toggleIsDone = () => {
    // setIsDone(!isDone);
  };

  return (
    <li
      className={`flex items-center gap-[16px] p-[8px_10px]
    border-[2px] border-solid border-slate-900 rounded-[27px]
    font-regular-16 ${isCompleted && "line-through bg-violet-100"}`}
    >
      <Link href={`/${id}`}>
        <button
          className={`[&>svg]:w-[32px] [&>svg]:h-[32px]`}
          onClick={toggleIsDone}
        >
          {isCompleted ? <CheckBoxIcon /> : <DefaultCheckboxIcon />}
        </button>
        {name}
      </Link>
    </li>
  );
}
