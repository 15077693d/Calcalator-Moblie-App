export enum NumberPadButtonType {
  Delete = "Delete",
  Reset = "Reset",
  Equal = "Equal",
  Primary = "Primary",
}

export type ButtonProps = {
  label: string;
  handlePress?: () => void;
};

export type NumberPadButtonProps = ButtonProps & {
  buttonType: NumberPadButtonType;
  handlePress?: () => void;
};

export type BaseNumberPadButtonProps = {
  buttonType: NumberPadButtonType;
  active?: boolean;
};
