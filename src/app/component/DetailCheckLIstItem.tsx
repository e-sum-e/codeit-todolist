"use client";

import DefaultCheckboxIcon from "../../assets/icon/default-checkbox.svg";
import CheckBoxIcon from "../../assets/icon/checkbox.svg";

interface Props {
  name: string;
  onChangeName: (nextName: string) => void;
  isCompleted: boolean;
  toggleIsCompleted: () => void;
}

export default function DetailCheckListItem({
  name,
  onChangeName,
  isCompleted,
  toggleIsCompleted,
}: Props) {
  return (
    <li
      className={`flex justify-center items-center gap-[16px] p-[14px]
    border-[2px] border-solid border-slate-900 rounded-[24px]
    text-[20px] font-[700] underline ${isCompleted && "bg-violet-100"}`}
    >
      <button
        className={`[&>svg]:w-[32px] [&>svg]:h-[32px]`}
        onClick={toggleIsCompleted}
      >
        {isCompleted ? <CheckBoxIcon /> : <DefaultCheckboxIcon />}
      </button>
      <input
        className="bg-transparent"
        id="name"
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
      />
    </li>
  );
}
