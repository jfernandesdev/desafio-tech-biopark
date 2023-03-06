import styled from "styled-components";

interface IInputContainer {
  error?: boolean;
}

export const InputContainer = styled.div<IInputContainer>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme["base-card-line"]};
  border-radius: 6px;

  ${({ error, theme }) =>
    error &&
    `
    background: ${theme["red-background"]};
    border: 1px solid ${theme["red-alert"]};

    > input {
       background: ${theme["red-background"]};
    }
  `}
`;

export const InputStyle = styled.input`
  width: 100%;
  color: ${(props) => props.theme["base-text"]};
  padding: 1rem;
  border: 0;

  &:disabled {
    cursor: "not-allowed";
  }

  &:read-only {
    cursor: "not-allowed";
    outline: 0;
    background: rgba(156, 163, 175, 0.2);
  }
`;

export const Prefix = styled.span`
  padding: 1rem;
  background: rgba(156, 163, 175, 0.2);
`;

export const Suffix = styled.span`
  padding: 1rem;
  background: rgba(156, 163, 175, 0.2);
`;
