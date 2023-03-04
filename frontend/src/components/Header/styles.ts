import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 5rem;
  padding: 0 5rem;
  gap: 1rem;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 0.5px 6px rgba(0, 0, 0, 0.2);
  z-index: 0;
`;

export const NotificationButton = styled.button`
  display: flex;
  position: relative;
  color: ${(props) => props.theme["base-text"]};
  background: transparent;
  border: 0;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -1px;
    width: 10px;
    height: 10px;
    background: ${(props) => props.theme["brand-secondary"]};
    border: 2px solid var(--white);
    border-radius: 100%;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: default;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 100%;
`;

export const NameProfile = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme["base-title"]};
  line-height: 120%;
`;

export const EmailProfile = styled.span`
  font-size: 0.75rem;
`;
