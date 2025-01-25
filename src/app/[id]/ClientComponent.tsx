"use client";

import DetailCheckListItem from "../component/DetailCheckLIstItem";

import { EditedData, TodoType } from "../utils/type";
import { useEffect, useState } from "react";
import AddImage from "./AddImage";
import AddMemo from "./AddMemo";
import Buttons from "./Buttons";
import { useRouter } from "next/navigation";
import { HTTPHeaders, HTTPMethods, request } from "../utils/request";

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

        const uploadImageResponse = await request(
          "/images/upload",
          HTTPMethods.POST,
          HTTPHeaders.FormData,
          formData
        );

        const uploadImageResponseValue = await uploadImageResponse.json();
        const imageUrl = uploadImageResponseValue.url;

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

      await request(
        `/items/${id}`,
        HTTPMethods.PATCH,
        HTTPHeaders.JSON,
        JSON.stringify(editedData)
      );

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async () => {
    try {
      await request(`/items/${id}`, HTTPMethods.DELETE);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await request(`/items/${id}`, HTTPMethods.GET);
        const responseValue = await response.json();

        setTodo(responseValue);
        setName(responseValue.name);
        setMemo(responseValue.memo ?? "");
        setIsCompleted(responseValue.isCompleted);
        setImageUrl(responseValue.imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, [id]);

  if (todo === null) return null;

  return (
    <div className={`xl:px-[102px]`}>
      <DetailCheckListItem
        currentName={todo.name}
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
        <AddMemo
          currentMemo={todo.memo}
          memo={memo}
          onChangeMemo={onChangeMemo}
        />
      </div>
      <Buttons onSubmit={onSubmit} onDelete={onDelete} />
    </div>
  );
}
