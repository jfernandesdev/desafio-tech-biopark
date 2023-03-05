import { PlusCircle } from "phosphor-react";

import { ButtonStyle } from "./styles";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  withPlusIcon?: boolean;
}

export function Button({
  text,
  variant = "primary",
  withPlusIcon,
  ...props
}: IButton) {
  return (
    <ButtonStyle variant={variant} {...props}>
      {text}
      {withPlusIcon && <PlusCircle size={24} weight="fill" />}
    </ButtonStyle>
  );
}
