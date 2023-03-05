import styled from "styled-components";

interface IButtonStyle {
  variant?: "primary" | "secondary" | "danger";
}

export const ButtonStyle = styled.button<IButtonStyle>`
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  svg {
    margin-left: 6px;
  }

  //type primary
  ${({ variant, theme }) =>
    variant === "primary" &&
    `
    background: ${theme["brand-secondary"]};
    color: ${theme.white};
    border: 0;

    &:hover {
      background: #b41b1d;
    }
  `}

  // variant secondary
  ${({ variant, theme }) =>
    variant === "secondary" &&
    `
     background: transparent;
     color: ${theme["base-text"]};
     border: 1px solid ${theme["base-text"]};

     &:hover {
      background: ${theme["base-text"]};
      color: ${theme.white};
     }
  `}

// variant danger
   ${({ variant, theme }) =>
    variant === "danger" &&
    `
     background: ${theme["red-background"]};
     color: ${theme["red-alert"]};
     border: 1px solid ${theme["red-alert"]};

     &:hover {
      background: ${theme["red-alert"]};
      color: ${theme.white};
     }
  `}
`;
