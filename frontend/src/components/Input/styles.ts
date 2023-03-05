import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme["base-card-line"]};
  border-radius: 6px;
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
