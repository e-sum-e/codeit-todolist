import Image from "next/image";
import { CheckListItemType } from "../utils/type";
import CheckListItem from "../component/CheckListItem";

interface Props {
  items: CheckListItemType[];
}

export default function Todos({ items }: Props) {
  return (
    <div className="mt-[24px] xl:mt-0 xl:w-[588px]">
      <Image src="/image/todo@2x.png" alt="todo" width={101} height={36} />
      {items.length < 1 ? (
        <div className="flex flex-col items-center w-[fit-content] m-[auto]">
          <div className="md:hidden">
            <Image
              src="/image/empty-todo-small@2x.png"
              alt="empty-todo"
              width={120}
              height={120}
            />
          </div>
          <div className="sm:hidden md:block">
            <Image
              src="/image/empty-todo-large@2x.png"
              alt="empty-todo"
              width={240}
              height={240}
            />
          </div>
          <div
            className={`font-bold-16 text-slate-400 text-center whitespace-pre-line`}
          >
            할 일이 없어요.{"\n"}TODO를 새롭게 추가해주세요!
          </div>
        </div>
      ) : (
        <ul className="flex flex-col gap-[16px] mt-[16px]">
          {items.map((item) => (
            <CheckListItem
              key={item.id}
              title={item.title}
              isDone={item.isDone}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
