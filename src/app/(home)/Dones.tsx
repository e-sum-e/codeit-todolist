import Image from "next/image";
import { TodoType } from "../utils/type";
import CheckListItem from "../component/CheckListItem";
import EmptyList from "../component/EmptyList";

interface Props {
  items: TodoType[];
  toggleIsCompleted: (id: number) => void;
}

export default function Dones({ items, toggleIsCompleted }: Props) {
  return (
    <div className="mt-[48px] xl:w-[588px] xl:mt-0">
      <Image src="/image/done@2x.png" alt="todo" width={101} height={36} />
      {items.length < 1 ? (
        <div className="flex flex-col items-center w-[fit-content] m-[auto]">
          <EmptyList
            smallImageUrl={"/image/empty-done-small@2x.png"}
            largeImageUrl={"/image/empty-done-large@2x.png"}
            description={`아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!`}
            alt={"empty todos"}
          />
        </div>
      ) : (
        <ul className="flex flex-col gap-[16px] mt-[16px]">
          {items.map((item) => (
            <CheckListItem
              id={item.id}
              key={item.id}
              name={item.name}
              isCompleted={item.isCompleted}
              toggleIsCompleted={toggleIsCompleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
