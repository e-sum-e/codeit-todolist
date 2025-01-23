import Image from "next/image";
import CheckListItem from "../component/CheckListItem";
import AddTodo from "./AddTodo";

const tempCheckListItems = [
  { id: "1", title: "비타민 챙겨먹기", isDone: true },
  { id: "2", title: "맥주 마시기", isDone: false },
  { id: "3", title: "운동하기", isDone: false },
];

export default function Home() {
  return (
    <>
      <AddTodo checkListItems={tempCheckListItems} />
      <div className={`flex flex-col xl:flex-row xl:gap-[24px] xl:mt-[40px]`}>
        <div className="mt-[24px] xl:mt-0 xl:w-[588px]">
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
        <div className="mt-[48px] xl:w-[588px] xl:mt-0">
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
        </div>{" "}
      </div>
    </>
  );
}
