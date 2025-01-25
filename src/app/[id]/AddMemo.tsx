"use client";

interface Props {
  currentMemo?: string;
  memo?: string;
  onChangeMemo: (nextMemo: string) => void;
}

export default function AddMemo({ currentMemo, memo, onChangeMemo }: Props) {
  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeMemo(e.target.value);
  };
  console.log(currentMemo);
  return (
    <label
      className={`flex flex-col justify-center items-center relative
      xl:w-[100%] h-[311px] mt-[15px] md:mt-[24px] xl:mt-0 p-[24px_16px]
      rounded-[24px] bg-[url("/image/memo.png")] bg-center`}
      htmlFor="memo"
    >
      <div className={`absolute top-[24px] text-extra-bold-16 text-amber-800`}>
        Memo
      </div>

      <textarea
        id="memo"
        className={`w-[100%] h-[100%] max-h-[229px] mt-[auto] text-regular-16
        bg-transparent resize-none [&::-webkit-scrollbar]:hidden`}
        onChange={handleChangeMemo}
        value={memo}
      />
    </label>
  );
}
