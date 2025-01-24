"use client";

import Image from "next/image";
import DetailCheckListItem from "../component/DetailCheckLIstItem";
import PlusVarintIcon from "../../assets/icon/plus-variant.svg";

interface Props {
  description: string;
}

export default function page({
  description = "오메가 3, 프로폴리스, 아연 챙겨먹기",
}: Props) {
  return (
    <div className={`xl:px-[102px]`}>
      <DetailCheckListItem title={"비타민 챙겨먹기"} />
      <div className={`flex flex-col xl:flex-row xl:gap-[24px] mt-[17px]`}>
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
            <input
              id="file"
              className={`hidden`}
              type="file"
              accept="image/*"
            />
          </form>
        </div>
        <div
          className={`flex flex-col justify-center items-center relative
            xl:w-[100%] h-[311px] mt-[15px] md:mt-[24px] xl:mt-0
            rounded-[24px] bg-[url("/image/memo.png")] bg-center`}
        >
          <div
            className={`absolute top-[24px] text-extra-bold-16 text-amber-800`}
          >
            Memo
          </div>
          <div className="text-regular-16">{description}</div>
        </div>
      </div>
    </div>
  );
}
