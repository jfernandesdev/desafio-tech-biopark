import { forwardRef } from "react";

import { InputStyle, InputContainer, Suffix, Prefix } from "./styles";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ prefix, suffix, ...props }: IInput, ref) => {
    return (
      <InputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}

        <InputStyle ref={ref} {...props} />

        {!!suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
    );
  }
);
