import Image from "next/image";
import { TodoType } from "../utils/type";
import CheckListItem from "../component/CheckListItem";
import EmptyList from "../component/EmptyList";

interface Props {
  items: TodoType[];
}

export default function Todos({ items }: Props) {
  return (
    <div className="mt-[24px] xl:mt-0 xl:w-[588px]">
      <Image src="/image/todo@2x.png" alt="todo" width={101} height={36} />
      {items.length < 1 ? (
        <div className="flex flex-col items-center w-[fit-content] m-[auto]">
          <EmptyList
            smallImageUrl={"/image/empty-todo-small@2x.png"}
            largeImageUrl={"/image/empty-todo-large@2x.png"}
            description={`할 일이 없어요.\nTODO를 새롭게 추가해주세요!`}
            alt={"empty todos"}
          />
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
