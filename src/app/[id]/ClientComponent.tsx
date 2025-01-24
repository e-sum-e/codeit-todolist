"use client";

import DetailCheckListItem from "../component/DetailCheckLIstItem";

import { seomiId, TodoType } from "../utils/type";
import { useEffect, useState } from "react";
import AddImage from "./AddImage";
import AddMemo from "./AddMemo";
import Buttons from "./Buttons";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function ClientComponent({ id }: Props) {
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const onChangeName = (nextName: string) => {
    setName(nextName);
  };

  const toggleIsCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const onSubmit = async () => {
    const editedData = {
      name,
      memo,
      isCompleted,
      imageUrl,
    };

    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${seomiId}/items/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      }
    );

    if (response.ok) {
      router.push("/");
    } else {
      console.log(response);
    }
  };

  const onCancel = () => {
    router.back();
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const response: TodoType = await (
        await fetch(
          `https://assignment-todolist-api.vercel.app/api/${seomiId}/items/${id}`
        )
      ).json();

      setTodo(response);
      setName(response.name);
      setMemo(response.memo ?? "");
      setIsCompleted(response.isCompleted);
      setImageUrl(response.imageUrl ?? "");
    };

    fetchTodos();
  }, [id]);

  if (todo === null) return null;

  return (
    <div className={`xl:px-[102px]`}>
      <DetailCheckListItem
        name={name}
        onChangeName={onChangeName}
        isCompleted={isCompleted}
        toggleIsCompleted={toggleIsCompleted}
      />
      <div className={`flex flex-col xl:flex-row xl:gap-[24px] mt-[17px]`}>
        <AddImage />
        <AddMemo memo={memo} />
      </div>
      <Buttons onSubmit={onSubmit} onCancel={onCancel} />
    </div>
  );
}
