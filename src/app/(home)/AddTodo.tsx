"use client";

import TextButton from "../component/Button/TextButton";
import TodoInput from "../component/TodoInput";
import { ButtonType, seomiId, TodoType } from "../utils/type";
import PlusWhiteIcon from "../../assets/icon/plus-white.svg";
import PlusBlackIcon from "../../assets/icon/plus-black.svg";
import { useState } from "react";

interface Props {
  checkListItems: TodoType[];
}

export default function AddTodo({ checkListItems }: Props) {
  const [todoText, setTodoText] = useState("");

  const changeTodoText = (nextTodo: string) => {
    setTodoText(nextTodo);
  };

  const onSubmit = async () => {
    try {
      await fetch(
        `https://assignment-todolist-api.vercel.app/api/${seomiId}/items`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: todoText }),
          cache: "no-store",
        }
      );
      window.location.reload();
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
