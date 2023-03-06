import styled from "styled-components";

export const Card = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme["base-card-background"]};
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: border 0.3s ease-out;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.5rem 0;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Title = styled.strong`
  color: ${(props) => props.theme["base-title"]};
  font-weight: 500;
  font-size: 1.5rem;
`;

export const Description = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.875rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

interface IAvailabilityTag {
  variant?: "available" | "unavailable";
}

export const AvailabilityTag = styled.span<IAvailabilityTag>`
  height: 46px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: background 0.2s;
  cursor: pointer;

  //available
  ${({ variant, theme }) =>
    variant === "available" &&
    `
    background: ${theme["green-background"]};
    color: ${theme["green-success"]};
    border: 0;

    &:hover {
      background: ${theme["green-success"]};
      color: ${theme.white};
    }
  `}

  //unavailable
  ${({ variant, theme }) =>
    variant === "unavailable" &&
    `
    background: ${theme["red-background"]};
    color: ${theme["red-alert"]};
    border: 0;

    &:hover {
      background: ${theme["red-alert"]};
      color: ${theme.white};
    }
  `}
`;
