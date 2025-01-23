export enum ButtonType {
  SECONDARY = "secondary",
  DANGER = "danger",
  PRIMARY = "primary",
  SUCCESS = "success",
  DARK = "dark",
}

export type CheckListItem = {
  id: string;
  title: string;
  isDone: boolean;
};
