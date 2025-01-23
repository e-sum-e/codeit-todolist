"use client";

import TextButton from "../component/Button/TextButton";
import TodoInput from "../component/TodoInput";
import { ButtonType, CheckListItemType } from "../utils/type";
import PlusWhiteIcon from "../../assets/icon/plus-white.svg";
import PlusBlackIcon from "../../assets/icon/plus-black.svg";

interface Props {
  checkListItems: CheckListItemType[];
}

export default function AddTodo({ checkListItems }: Props) {
  return (
    <div className="flex gap-[8px]  md:gap-[16px]">
      <TodoInput />
      <TextButton
        icon={checkListItems.length > 0 ? <PlusBlackIcon /> : <PlusWhiteIcon />}
        type={
          checkListItems.length > 0 ? ButtonType.SECONDARY : ButtonType.PRIMARY
        }
        text={"추가하기"}
        style={`flex-none ${checkListItems.length === 0 && "text-white"}`}
      />
    </div>
  );
}
