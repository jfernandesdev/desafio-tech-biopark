import styled from "styled-components";

export const Card = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme["base-card-background"]};
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: border 0.3s ease-out;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme["brand-secondary"]};
  }
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

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Title = styled.strong`
  color: ${(props) => props.theme["base-title"]};
  font-weight: 500;
  font-size: 1.5rem;
`;

export const NumberOfApartments = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #a8a8a8;
  border-radius: 8px;
  padding: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }
`;

export const TotalApartments = styled.span`
  color: ${(props) => props.theme["base-title"]};
  text-align: right;
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  border-right: 1px solid ${(props) => props.theme["base-card-line"]};

  > strong {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

export const AvailableApartment = styled.span`
  color: ${(props) => props.theme["green-success"]};
  font-size: 0.875rem;
`;

export const UnavailableApartment = styled.span`
  color: ${(props) => props.theme["red-alert"]};
  font-size: 0.875rem;
`;

export const Description = styled.span`
  font-size: 0.875rem;
`;

export const MoreDetailsBtn = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["base-title"]};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
`;
