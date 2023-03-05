import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  > span + span {
    border-left: 1px solid gray;
    padding-left: 1rem;
  }
`;

export const ApartmentsCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
`;
