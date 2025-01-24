"use client";

interface Props {
  todo: string;
  changeTodo: (nextTodo: string) => void;
}

export default function TodoInput({ todo, changeTodo }: Props) {
  return (
    <input
      className={`flex justify-center items-center gap-[16px]
    w-[100%] p-[12px_22px]
    border-[2px] border-solid border-slate-900 rounded-[24px]
    shadow-[4px_4px_0_0] shadow-slate-900 font-regular-16
    autofill:color-slate-500
    font-normal
    `}
      onChange={(e) => changeTodo(e.target.value)}
      value={todo}
      placeholder="할 일을 입력해주세요"
    />
  );
}
