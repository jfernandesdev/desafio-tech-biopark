import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { Button } from "../Button";
import { Form, Label, FooterForm, RowTwoColumns } from "../Form/styles";
import { Input } from "../Input";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalCloseButton,
} from "../Modal/styles";

export function NewBuildingModal() {
  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>
          Cadastrando novo <span>Edifício</span>
        </ModalTitle>

        <ModalCloseButton>
          <X size={24} weight="bold" />
        </ModalCloseButton>

        <Form>
          <Label htmlFor="name">
            Nome do edifício:
            <Input type="text" id="name" required />
          </Label>

          <Label htmlFor="address">
            Endereço:
            <Input type="text" id="address" required />
          </Label>

          <RowTwoColumns>
            <Label htmlFor="number_of_floors">
              Número de andares:
              <Input
                type="number"
                id="number_of_floors"
                min="1"
                max="99"
                required
              />
            </Label>

            <Label htmlFor="opening_date">
              Data de inauguração:
              <Input type="date" id="opening_date" required />
            </Label>
          </RowTwoColumns>

          <FooterForm>
            <Dialog.Close asChild>
              <Button type="reset" variant="secondary" text="Cancelar" />
            </Dialog.Close>
            <Button type="submit" text="Cadastrar edifício" />
          </FooterForm>
        </Form>
      </ModalContent>
    </Dialog.Portal>
  );
}
