"use client";

import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Dones from "./Dones";
import { seomiId, TodoType } from "../utils/type";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const toggleIsCompleted = async (id: number) => {
    try {
      const targetTodo = todos.find((todo) => todo.id === id);
      if (!targetTodo) {
        console.error("Todo not found.");
        return;
      }

      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      setTodos(updatedTodos);

      const response = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${seomiId}/items/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isCompleted: !targetTodo.isCompleted }),
        }
      );

      if (!response.ok) {
        console.error("Update isCompleted Error");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await (
        await fetch(
          `https://assignment-todolist-api.vercel.app/api/${seomiId}/items`
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
        <Todos
          items={todos.filter((item) => item.isCompleted === false)}
          toggleIsCompleted={toggleIsCompleted}
        />
        <Dones
          items={todos.filter((item) => item.isCompleted === true)}
          toggleIsCompleted={toggleIsCompleted}
        />
      </div>
    </>
  );
}
