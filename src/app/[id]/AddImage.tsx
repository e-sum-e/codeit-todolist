"use client";

import Image from "next/image";
import PlusVarintIcon from "../../assets/icon/plus-variant.svg";

export default function AddImage() {
  return (
    <div
      className={`flex justify-center items-center relative xl:flex-none xl:w-[384px] h-[311px]
    rounded-[24px] border-[2px] border-dashed border-slate-300
    bg-slate-50`}
    >
      <Image src="/image/img@2x.png" alt="todo" width={64} height={64} />
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
        <input id="file" className={`hidden`} type="file" accept="image/*" />
      </form>
    </div>
  );
}
