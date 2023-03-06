import { forwardRef } from "react";

import { InputStyle, InputContainer, Suffix, Prefix } from "./styles";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ prefix, suffix, error, ...props }: IInput, ref) => {
    return (
      <InputContainer error={error}>
        {!!prefix && <Prefix>{prefix}</Prefix>}

        <InputStyle ref={ref} {...props} />

        {!!suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
    );
  }
);
