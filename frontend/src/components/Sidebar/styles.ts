import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 7rem;
  height: 100vh;
  padding-bottom: 5rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${(props) => props.theme["brand-primary"]};
  z-index: 999;
`;

export const BrandLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style-type: none;

  a {
    border-radius: 20px;

    &.active {
      background: rgba(255, 255, 255, 0.05);

      svg {
        color: ${(props) => props.theme["brand-secondary"]};
      }
    }

    &:not(.active) > li:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const OptionMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  font-size: 2.5rem;
  color: ${(props) => props.theme.white};
  border-radius: 1rem;
  cursor: pointer;
  transition: all ease-out 120px;

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  display: inline-block;
  margin-top: 7.5px;
  left: 90px;
  padding: 8px 15px;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  white-space: nowrap;
  background: ${(props) => props.theme["brand-secondary"]};
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -4px;
    top: 10px;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: inherit;
  }
`;
