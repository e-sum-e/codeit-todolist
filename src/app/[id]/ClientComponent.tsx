"use client";

import DetailCheckListItem from "../component/DetailCheckLIstItem";

import { seomiId, TodoType } from "../utils/type";
import { useEffect, useState } from "react";
import AddImage from "./AddImage";
import AddMemo from "./AddMemo";
import Buttons from "./Buttons";

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
        <AddImage />
        <AddMemo memo={todo.memo} />
      </div>
      <Buttons />
    </div>
  );
}
