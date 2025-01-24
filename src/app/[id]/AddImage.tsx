"use client";

import Image from "next/image";
import PlusVarintIcon from "../../assets/icon/plus-variant.svg";
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

    const file = e.target.files[0];
    const url = window.URL.createObjectURL(file);

    onChangeImageFile(file);
    setPreview(url);
  };

  console.log(imageUrl);

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
        bg-slate-200 rounded-[50%]
        [&>svg]:w-[24px] [&>svg]:h-[24px] `}
        >
          <PlusVarintIcon />
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
