import TextButton from "./component/Button/TextButton";
import TodoInput from "./component/TodoInput";
import AddIcon from "../assets/icon/plus-white.svg";
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
      <div className="flex gap-[8px]">
        <TodoInput />
        <TextButton
          icon={<AddIcon />}
          type={ButtonType.PRIMARY}
          text={"추가하기"}
          style={"flex-none text-white"}
        />
      </div>
      <div className="mt-[24px]">
        <Image
          src="/image/todo@2x.png"
          alt="todo"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "auto", height: "100%" }}
        />
        <ul className="flex gap-[16px] mt-[16px]">
          {tempCheckListItems.map((item) => (
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
