import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9998;
`;

export const ModalContent = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["base-card-background"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const ModalTitle = styled(Dialog.Title)`
  color: ${(props) => props.theme["base-title"]};
  font-size: 1.5rem;
  font-weight: 500;

  > span {
    color: ${(props) => props.theme["brand-secondary"]};
  }
`;

export const ModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  line-height: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme["base-title"]};
`;
