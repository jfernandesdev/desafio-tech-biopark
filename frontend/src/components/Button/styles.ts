import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IButtonStyle {
  type?: "primary" | "secondary" | "danger";
}

export const ButtonStyle = styled(NavLink)<IButtonStyle>`
  border-radius: 10px;
  padding: 10px 20px;
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
  ${({ type, theme }) =>
    type === "primary" &&
    `
    background: ${theme["brand-secondary"]};
    color: ${theme.white};
    border: 0;

    &:hover {
      background: #b41b1d;
    }
  `}

  // type secondary
  ${({ type, theme }) =>
    type === "secondary" &&
    `
     background: transparent;
     color: ${theme["base-text"]};
     border: 1px solid ${theme["base-text"]};

     &:hover {
      background: ${theme["base-text"]};
      color: ${theme.white};
     }
  `}

// type danger
   ${({ type, theme }) =>
    type === "danger" &&
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
