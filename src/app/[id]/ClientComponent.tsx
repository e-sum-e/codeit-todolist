"use client";

import DetailCheckListItem from "../component/DetailCheckLIstItem";

import { EditedData, seomiId, TodoType } from "../utils/type";
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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const router = useRouter();

  const onChangeName = (nextName: string) => {
    setName(nextName);
  };

  const onChangeImageFile = (nextImage: File) => {
    setImageFile(nextImage);
  };

  const toggleIsCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const onChangeMemo = (nextMemo: string) => {
    setMemo(nextMemo);
  };

  const onSubmit = async () => {
    let editedData: EditedData;

    try {
      if (imageFile !== null) {
        const formData = new FormData();
        formData.append("image", imageFile ?? "");
        const formDataResponse = await fetch(
          `https://assignment-todolist-api.vercel.app/api/${seomiId}/images/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!formDataResponse.ok) {
          const errorResponse = await formDataResponse.json();
          console.log("Image upload failed:", errorResponse);
          return;
        }

        const uploadImageResult = await formDataResponse.json();
        const imageUrl = uploadImageResult.url;

        editedData = {
          name,
          memo,
          isCompleted,
          imageUrl,
        };
      } else {
        editedData = {
          name,
          memo,
          isCompleted,
        };
      }

      const jsonResponse = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${seomiId}/items/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        }
      );

      if (!jsonResponse.ok) {
        const errorResponse = await jsonResponse.json();
        console.log("Item update failed:", errorResponse);
        return;
      }
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async () => {
    try {
      await fetch(
        `https://assignment-todolist-api.vercel.app/api/${seomiId}/items/${id}`,
        {
          method: "DELETE",
        }
      );

      router.back();
    } catch (error) {
      console.error(error);
    }
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
      setImageUrl(response.imageUrl);
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
        <AddImage
          imageUrl={imageUrl}
          imageFile={imageFile}
          onChangeImageFile={onChangeImageFile}
        />
        <AddMemo memo={memo} onChangeMemo={onChangeMemo} />
      </div>
      <Buttons onSubmit={onSubmit} onDelete={onDelete} />
    </div>
  );
}
