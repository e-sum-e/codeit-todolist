"use client";

import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Dones from "./Dones";
import { TodoType } from "../utils/type";
import { useEffect, useState } from "react";
import { HTTPHeaders, HTTPMethods, request } from "../utils/request";

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

      await request(
        `/items/${id}`,
        HTTPMethods.PATCH,
        HTTPHeaders.JSON,
        JSON.stringify({ isCompleted: !targetTodo.isCompleted })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await request("/items", HTTPMethods.GET);
        const responseValue = await response.json();

        setTodos(responseValue);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <>
      <AddTodo checkListItems={todos} setTodos={setTodos} />
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
