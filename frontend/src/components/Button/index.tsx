import { PlusCircle } from "phosphor-react";

import { ButtonStyle } from "./styles";

interface IButton {
  link: string;
  text: string;
  type?: "primary" | "secondary" | "danger";
  withPlusIcon?: boolean;
}

export function Button({
  link,
  text,
  type = "primary",
  withPlusIcon,
}: IButton) {
  return (
    <ButtonStyle to={link} type={type}>
      {text}
      {withPlusIcon && <PlusCircle size={24} weight="fill" />}
    </ButtonStyle>
  );
}
