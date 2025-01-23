import TextButton from "./component/Button/TextButton";
import TodoInput from "./component/TodoInput";
import AddIcon from "../assets/icon/plus-white.svg";
import { ButtonType } from "./utils/type";

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
    </>
  );
}
