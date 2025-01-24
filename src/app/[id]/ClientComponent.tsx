"use client";

import Image from "next/image";
import DetailCheckListItem from "../component/DetailCheckLIstItem";
import PlusVarintIcon from "../../assets/icon/plus-variant.svg";
import CheckIcon from "../../assets/icon/check.svg";
import XIcon from "../../assets/icon/x.svg";
import TextButton from "../component/Button/TextButton";
import { ButtonType, seomiId, TodoType } from "../utils/type";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

export default function ClientComponent({ id }: Props) {
  const [todo, setTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await (
        await fetch(
          `https://assignment-todolist-api.vercel.app/api/${seomiId}/items/${id}`
        )
      ).json();

      setTodo(response);
    };

    fetchTodos();
  }, [id]);

  if (todo === null) return null;

  return (
    <div className={`xl:px-[102px]`}>
      <DetailCheckListItem name={todo.name} />
      <div className={`flex flex-col xl:flex-row xl:gap-[24px] mt-[17px]`}>
        <div
          className={`flex justify-center items-center relative xl:flex-none xl:w-[384px] h-[311px]
          rounded-[24px] border-[2px] border-dashed border-slate-300
          bg-slate-50`}
        >
          <Image src="/image/img@2x.png" alt="todo" width={64} height={64} />
          <label htmlFor="file">
            <div
              className={`flex justify-center items-center w-[64px] h-[64px]
              absolute bottom-[16px] right-[16px]
              bg-slate-200 rounded-[50%]
              [&>svg]:w-[24px] [&>svg]:h-[24px] `}
            >
              <PlusVarintIcon />
            </div>
          </label>
          <form>
            <input
              id="file"
              className={`hidden`}
              type="file"
              accept="image/*"
            />
          </form>
        </div>
        <div
          className={`flex flex-col justify-center items-center relative
            xl:w-[100%] h-[311px] mt-[15px] md:mt-[24px] xl:mt-0
            rounded-[24px] bg-[url("/image/memo.png")] bg-center`}
        >
          <div
            className={`absolute top-[24px] text-extra-bold-16 text-amber-800`}
          >
            Memo
          </div>
          <div className="text-regular-16">{todo.memo}</div>
        </div>
      </div>
      <div
        className="flex xl:justify-self-end gap-[10px] md:gap-[16px] w-fit
      mt-[24px] mx-[auto] xl:mx-0"
      >
        <TextButton
          icon={<CheckIcon />}
          type={ButtonType.SECONDARY}
          text={"수정 완료"}
          style={"w-[168px]"}
          onClick={() => {}}
        />
        <TextButton
          icon={<XIcon />}
          type={ButtonType.DANGER}
          text={"삭제하기"}
          style="w-[168px] text-white"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
