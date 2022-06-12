export enum NumberPadButtonType {
  Delete = "Delete",
  Reset = "Reset",
  Equal = "Equal",
  Primary = "Primary",
}

export type ButtonProps<T> = {
  label: string;
  handlePress: (option: T) => void;
};

export type NumberPadButtonProps<T> = ButtonProps<T> & {
  buttonType: NumberPadButtonType;
};

export type BaseNumberPadButtonProps = {
  buttonType: NumberPadButtonType;
  active?: boolean;
};
