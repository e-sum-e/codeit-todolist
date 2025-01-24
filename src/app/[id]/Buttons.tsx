"use client";

import CheckIcon from "../../assets/icon/check.svg";
import XIcon from "../../assets/icon/x.svg";
import TextButton from "../component/Button/TextButton";
import { ButtonType } from "../utils/type";

interface Props {
  onSubmit: () => void;
  onDelete: () => void;
}

export default function Buttons({ onSubmit, onDelete }: Props) {
  return (
    <div
      className="flex xl:justify-self-end gap-[10px] md:gap-[16px] w-fit
  mt-[24px] mx-[auto] xl:mx-0"
    >
      <TextButton
        icon={<CheckIcon />}
        type={ButtonType.SECONDARY}
        text={"수정 완료"}
        style={"w-[168px]"}
        onClick={onSubmit}
      />
      <TextButton
        icon={<XIcon />}
        type={ButtonType.DANGER}
        text={"삭제하기"}
        style="w-[168px] text-white"
        onClick={onDelete}
      />
    </div>
  );
}
