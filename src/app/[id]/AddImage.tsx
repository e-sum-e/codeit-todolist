"use client";

import Image from "next/image";
import PlusVarintIcon from "../../assets/icon/plus-variant.svg";
import EditIcon from "../../assets/icon/edit.svg";
import { useState } from "react";

interface Props {
  imageUrl: string | null;
  imageFile: File | null;
  onChangeImageFile: (nextImage: File) => void;
}

export default function AddImage({ imageUrl, onChangeImageFile }: Props) {
  const [preview, setPreview] = useState(imageUrl);
  const handleChangeImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    /* 파일 이름 영어로 제한 */
    const validFileName = /^[a-zA-Z0-9-_]+(\.[a-zA-Z0-9]+)?$/;
    if (!validFileName.test(e.target.files[0].name)) {
      alert("영어로 된 파일만 업로드 가능합니다.");
      return;
    }

    /* 파일 사이즈 5MB 제한 */
    if (e.target.files[0].size > 5 * 1024 * 1024) {
      alert("5MB 이하의 파일만 업로드 가능합니다.");
      return;
    }

    const file = e.target.files[0];
    const url = window.URL.createObjectURL(file);

    onChangeImageFile(file);
    setPreview(url);
  };

  return (
    <div
      className={`flex justify-center items-center relative xl:flex-none xl:w-[384px] h-[311px]
    rounded-[24px] border-[2px] border-dashed border-slate-300 bg-slate-50
    overflow-hidden`}
    >
      <Image src="/image/img@2x.png" alt="todo" width={64} height={64} />
      {preview !== null && (
        <div className={`absolute top-0 right-0 bottom-0 left-0`}>
          <Image
            src={`${preview}`}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "100%", backgroundColor: "white" }}
            alt="preview"
          />
        </div>
      )}

      <label htmlFor="file">
        <div
          className={`flex justify-center items-center w-[64px] h-[64px]
        absolute bottom-[16px] right-[16px]
        ${
          imageUrl === null
            ? "bg-slate-200"
            : "bg-slate-900 bg-opacity-50 border-solid border-[2px] border-slate-900"
        }
         rounded-[50%]
        [&>svg]:w-[24px] [&>svg]:h-[24px] `}
        >
          {imageUrl === null ? <PlusVarintIcon /> : <EditIcon />}
        </div>
      </label>
      <form>
        <input
          id="file"
          className={`hidden`}
          type="file"
          accept="image/*"
          onChange={handleChangeImageUrl}
        />
      </form>
    </div>
  );
}
