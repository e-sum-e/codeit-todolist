"use client";

import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Dones from "./Dones";
import { seomiId, TodoType } from "../utils/type";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await (
        await fetch(
          `https://assignment-todolist-api.vercel.app/api/${seomiId}/items`,
          { cache: "no-store" }
        )
      ).json();

      setTodos(response);
    };

    fetchTodos();
  }, []);

  return (
    <>
      <AddTodo checkListItems={todos} />
      <div className={`flex flex-col xl:flex-row xl:gap-[24px] xl:mt-[40px]`}>
        <Todos items={todos.filter((item) => item.isCompleted === false)} />
        <Dones items={todos.filter((item) => item.isCompleted === true)} />
      </div>
    </>
  );
}
