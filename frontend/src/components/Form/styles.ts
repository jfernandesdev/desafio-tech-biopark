import styled from "styled-components";

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  color: ${(props) => props.theme["base-title"]};
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-card-line"]};
  color: ${(props) => props.theme["base-text"]};
  padding: 1rem;

  &:disabled {
    cursor: "not-allowed";
  }
`;

export const FooterForm = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const RowTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
