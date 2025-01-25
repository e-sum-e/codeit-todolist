"use client";

import DefaultCheckboxIcon from "../../assets/icon/default-checkbox.svg";
import CheckBoxIcon from "../../assets/icon/checkbox.svg";

interface Props {
  currentName: string;
  name: string;
  onChangeName: (nextName: string) => void;
  isCompleted: boolean;
  toggleIsCompleted: () => void;
}

export default function DetailCheckListItem({
  currentName,
  name,
  onChangeName,
  isCompleted,
  toggleIsCompleted,
}: Props) {
  return (
    <li
      className={`flex justify-center items-center gap-[16px] p-[14px]
    border-[2px] border-solid border-slate-900 rounded-[24px]
    text-[20px] font-[700] ${isCompleted && "bg-violet-100"} bg-white`}
    >
      <div className="flex justify-end w-[100%]">
        <button
          className={`[&>svg]:w-[32px] [&>svg]:h-[32px]`}
          onClick={toggleIsCompleted}
        >
          {isCompleted ? <CheckBoxIcon /> : <DefaultCheckboxIcon />}
        </button>
      </div>
      <div className="relative w-[100%]">
        <label htmlFor="name" className="underline">
          {currentName}
        </label>
        <input
          className={`absolute top-0 left-0 w-[100%]
          underline outline-none [&:focus]:bg-white placeholder:no-underline
          placeholder-shown:no-underline`}
          id="name"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          placeholder="할 일을 입력해주세요"
        />
      </div>
    </li>
  );
}
