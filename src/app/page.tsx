import TextButton from "./component/Button/TextButton";
import TodoInput from "./component/TodoInput";
import PlusWhiteIcon from "../assets/icon/plus-white.svg";
import PlusBlackIcon from "../assets/icon/plus-black.svg";
import { ButtonType } from "./utils/type";
import Image from "next/image";
import CheckListItem from "./component/CheckListItem";

const tempCheckListItems = [
  { id: "1", title: "비타민 챙겨먹기", isDone: true },
  { id: "2", title: "맥주 마시기", isDone: false },
  { id: "3", title: "운동하기", isDone: false },
];
export default function Home() {
  return (
    <>
      <div className="flex gap-[8px] md:gap-[16px]">
        <TodoInput />
        <TextButton
          icon={
            tempCheckListItems.length > 0 ? (
              <PlusBlackIcon />
            ) : (
              <PlusWhiteIcon />
            )
          }
          type={
            tempCheckListItems.length > 0
              ? ButtonType.SECONDARY
              : ButtonType.PRIMARY
          }
          text={"추가하기"}
          style={`flex-none ${tempCheckListItems.length === 0 && "text-white"}`}
        />
      </div>
      <div className="mt-[24px]">
        <Image src="/image/todo@2x.png" alt="todo" width={101} height={36} />
        <ul className="flex flex-col gap-[16px] mt-[16px]">
          {tempCheckListItems
            .filter((item) => item.isDone === false)
            .map((item) => (
              <CheckListItem
                key={item.id}
                title={item.title}
                isDone={item.isDone}
              />
            ))}
        </ul>
      </div>
      <div className="mt-[48px]">
        <Image src="/image/done@2x.png" alt="todo" width={101} height={36} />
        <ul className="flex flex-col gap-[16px] mt-[16px]">
          {tempCheckListItems
            .filter((item) => item.isDone === true)
            .map((item) => (
              <CheckListItem
                key={item.id}
                title={item.title}
                isDone={item.isDone}
              />
            ))}
        </ul>
      </div>
    </>
  );
}
