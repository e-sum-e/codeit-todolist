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
  imageUrl: string | null;
  isCompleted: boolean;
};

export interface EditedData {
  name: string;
  memo: string;
  isCompleted: boolean;
  imageUrl?: string;
}
