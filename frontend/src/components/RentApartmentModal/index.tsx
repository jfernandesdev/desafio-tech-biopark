import * as Dialog from "@radix-ui/react-dialog";
import { LadderSimple, Bed, CurrencyCircleDollar, X } from "phosphor-react";

import { Button } from "../Button";
import {
  Form,
  SubtitleInfo,
  Label,
  FooterForm,
  RowTwoColumns,
  RowThreeColumns,
} from "../Form/styles";
import { Input } from "../Input";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalCloseButton,
} from "../Modal/styles";

export function RentApartmentModal() {
  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>
          Alugando o <span>Apto. 1001</span>
        </ModalTitle>

        <SubtitleInfo>
          <span>
            <LadderSimple /> 1º andar
          </span>
          <span>
            <Bed />2 quartos
          </span>
          <span>
            <CurrencyCircleDollar />
            R$ 1200 / mês
          </span>
        </SubtitleInfo>

        <ModalCloseButton>
          <X size={24} weight="bold" />
        </ModalCloseButton>

        <Form>
          <RowThreeColumns>
            <Label htmlFor="locator">
              Locador:
              <Input type="text" id="locator" value="Biopark" readOnly />
            </Label>

            <Label htmlFor="start_date">
              Data de início:
              <Input type="date" id="start_date" required />
            </Label>

            <Label htmlFor="end_date">
              Data de término:
              <Input type="date" id="end_date" required />
            </Label>
          </RowThreeColumns>

          <strong>Dados do Locatário:</strong>

          <RowThreeColumns>
            <Label htmlFor="name">
              Nome completo:
              <Input type="text" id="name" required />
            </Label>

            <Label htmlFor="cpf">
              CPF:
              <Input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                required
              />
            </Label>

            <Label htmlFor="date_of_birth">
              Data de nascimento:
              <Input type="date" id="date_of_birth" required />
            </Label>
          </RowThreeColumns>

          <RowTwoColumns>
            <Label htmlFor="email">
              E-mail:
              <Input type="email" id="email" required />
            </Label>

            <Label htmlFor="phone">
              Telefone:
              <Input
                type="phone"
                id="phone"
                placeholder="(00) 0000-0000"
                required
              />
            </Label>
          </RowTwoColumns>

          <FooterForm>
            <Dialog.Close asChild>
              <Button type="reset" variant="secondary" text="Cancelar" />
            </Dialog.Close>
            <Button type="submit" text="Alugar apartamento" />
          </FooterForm>
        </Form>
      </ModalContent>
    </Dialog.Portal>
  );
}
