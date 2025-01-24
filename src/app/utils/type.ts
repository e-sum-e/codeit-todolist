export enum ButtonType {
  SECONDARY = "secondary",
  DANGER = "danger",
  PRIMARY = "primary",
  SUCCESS = "success",
  DARK = "dark",
}

export type AddTodoType = {
  name: string;
};

export type TodoType = {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
};

export const seomiId = "e-sum-e";
