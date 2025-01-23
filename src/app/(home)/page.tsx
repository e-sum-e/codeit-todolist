import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Dones from "./Dones";

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
        <Todos
          items={tempCheckListItems.filter((item) => item.isDone === false)}
        />
        <Dones
          items={tempCheckListItems.filter((item) => item.isDone === true)}
        />
      </div>
    </>
  );
}
