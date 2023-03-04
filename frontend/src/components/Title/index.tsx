import { TitleStyle } from "./styles";

interface ITitle {
  title: string;
  weight?: "700" | "500";
}

export function Title({ title, weight = "700" }: ITitle) {
  return <TitleStyle weight={weight}>{title}</TitleStyle>;
}
