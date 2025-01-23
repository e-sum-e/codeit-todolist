import Image from "next/image";
import { CheckListItemType } from "../utils/type";
import CheckListItem from "../component/CheckListItem";

interface Props {
  items: CheckListItemType[];
}

export default function Dones({ items }: Props) {
  return (
    <div className="mt-[48px] xl:w-[588px] xl:mt-0">
      <Image src="/image/done@2x.png" alt="todo" width={101} height={36} />
      <ul className="flex flex-col gap-[16px] mt-[16px]">
        {items.map((item) => (
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
