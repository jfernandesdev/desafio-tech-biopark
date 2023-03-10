import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-size: 1.5rem;
`;

export const Subtitle = styled.span`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1.1rem;
`;

export const BuildingsCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
`;
