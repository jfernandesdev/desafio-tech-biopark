import styled from "styled-components";

interface ITitleStyle {
  weight?: "700" | "500";
}

export const TitleStyle = styled.h1<ITitleStyle>`
  color: ${(props) => props.theme["base-title"]};
  font-size: 2.25rem;
  font-weight: ${(props) => (props.weight ? props.weight : "bold")};
  margin-bottom: 10px;
`;
