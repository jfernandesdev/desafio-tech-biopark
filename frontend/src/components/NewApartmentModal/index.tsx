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

export function NewApartmentModal() {
  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>
          Cadastrando novo <span>Apartamento</span>
        </ModalTitle>

        <ModalCloseButton>
          <X size={24} weight="bold" />
        </ModalCloseButton>

        <Form>
          <Label htmlFor="building_name">
            Edifício:
            <Input
              type="text"
              id="building_name"
              value="Edifício Residencial A"
              readOnly
            />
          </Label>

          <RowTwoColumns>
            <Label htmlFor="number">
              Número do apartamento:
              <Input type="number" id="number" required />
            </Label>

            <Label htmlFor="floor">
              Andar:
              <Input type="number" id="floor" suffix="º" required />
            </Label>
          </RowTwoColumns>

          <RowTwoColumns>
            <Label htmlFor="number_of_bedrooms">
              Quantidade de quartos:
              <Input type="number" id="number_of_bedrooms" required />
            </Label>

            <Label htmlFor="rent_value">
              Valor do aluguel:
              <Input
                type="number"
                id="rent_value"
                prefix="R$"
                suffix="/mês"
                required
              />
            </Label>
          </RowTwoColumns>

          <FooterForm>
            <Dialog.Close asChild>
              <Button type="reset" variant="secondary" text="Cancelar" />
            </Dialog.Close>
            <Button type="submit" text="Cadastrar apartamento" />
          </FooterForm>
        </Form>
      </ModalContent>
    </Dialog.Portal>
  );
}
