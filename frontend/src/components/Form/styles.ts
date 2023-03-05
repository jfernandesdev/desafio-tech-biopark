import styled from "styled-components";

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubtitleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme["base-card-line"]};

  > span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  color: ${(props) => props.theme["base-title"]};
`;

interface IFooterForm {
  variantJustify?: "right" | "center";
}
export const FooterForm = styled.footer<IFooterForm>`
  display: flex;
  justify-content: ${(props) =>
    props.variantJustify ? props.variantJustify : "center"};
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const RowTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 336px;
  gap: 1rem;
`;

export const RowThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 160px 160px;
  gap: 1rem;
`;
