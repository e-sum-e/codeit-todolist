import Image from "next/image";
import { CheckListItemType } from "../utils/type";
import CheckListItem from "../component/CheckListItem";

interface Props {
  items: CheckListItemType[];
}

export default function Todos({ items: todoItems }: Props) {
  return (
    <div className="mt-[24px] xl:mt-0 xl:w-[588px]">
      <Image src="/image/todo@2x.png" alt="todo" width={101} height={36} />
      <ul className="flex flex-col gap-[16px] mt-[16px]">
        {todoItems.map((item) => (
          <CheckListItem
            key={item.id}
            title={item.title}
            isDone={item.isDone}
          />
        ))}
      </ul>
    </div>
  );
}
