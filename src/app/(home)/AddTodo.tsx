"use client";

import TextButton from "../component/Button/TextButton";
import TodoInput from "../component/TodoInput";
import { ButtonType, TodoType } from "../utils/type";
import PlusWhiteIcon from "../../assets/icon/plus-white.svg";
import PlusBlackIcon from "../../assets/icon/plus-black.svg";
import { useState } from "react";
import { HTTPHeaders, HTTPMethods, request } from "../utils/request";

interface Props {
  checkListItems: TodoType[];
  setTodos: (nextTodos: TodoType[]) => void;
}

export default function AddTodo({ checkListItems, setTodos }: Props) {
  const [todoText, setTodoText] = useState("");

  const changeTodoText = (nextTodo: string) => {
    setTodoText(nextTodo);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await request(
        "/items",
        HTTPMethods.POST,
        HTTPHeaders.JSON,
        JSON.stringify({ name: todoText })
      );
      const response = await request("/items", HTTPMethods.GET);
      const responseValue = await response.json();

      setTodos(responseValue);
      changeTodoText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex gap-[8px]  md:gap-[16px]" onSubmit={onSubmit}>
      <TodoInput todo={todoText} changeTodo={changeTodoText} />
      <TextButton
        icon={checkListItems.length > 0 ? <PlusBlackIcon /> : <PlusWhiteIcon />}
        type={
          checkListItems.length > 0 ? ButtonType.SECONDARY : ButtonType.PRIMARY
        }
        text={"추가하기"}
        style={`flex-none [&>div]:hidden [&>div]:md:block ${
          checkListItems.length === 0 && "text-white"
        }`}
        onClick={() => {}}
      />
    </form>
  );
}
