"use client";

import DefaultCheckboxIcon from "../../assets/icon/default-checkbox.svg";
import CheckBoxIcon from "../../assets/icon/checkbox.svg";

interface Props {
  title: string;
  isDone: boolean;
}

export default function CheckListItem({ title, isDone }: Props) {
  // const [isDone, setIsDone] = useState(false);

  const toggleIsDone = () => {
    // setIsDone(!isDone);
  };

  return (
    <li
      className={`flex items-center gap-[16px] p-[8px_10px]
    border-[2px] border-solid border-slate-900 rounded-[27px]
    font-regular-16 ${isDone && "line-through bg-violet-100"}`}
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
