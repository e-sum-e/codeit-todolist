"use client";

interface Props {
  memo?: string;
}

export default function AddMemo({ memo }: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center relative
      xl:w-[100%] h-[311px] mt-[15px] md:mt-[24px] xl:mt-0
      rounded-[24px] bg-[url("/image/memo.png")] bg-center`}
    >
      <div className={`absolute top-[24px] text-extra-bold-16 text-amber-800`}>
        Memo
      </div>
      <div className="text-regular-16">{memo}</div>
    </div>
  );
}
