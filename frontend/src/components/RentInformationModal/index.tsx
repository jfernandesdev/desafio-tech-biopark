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

export function RentInformationModal() {
  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>Apartamento 1002</ModalTitle>

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
            <Label>
              Locador:
              <Input value="Biopark" readOnly />
            </Label>

            <Label>
              Data de início:
              <Input type="date" value="2023-03-04" readOnly />
            </Label>

            <Label>
              Data de término:
              <Input type="date" value="2024-03-04" readOnly />
            </Label>
          </RowThreeColumns>

          <strong>Dados do Locatário:</strong>

          <RowThreeColumns>
            <Label>
              Nome completo:
              <Input value="Jeferson Fernandes" readOnly />
            </Label>

            <Label>
              CPF:
              <Input value="111.222.333044" readOnly />
            </Label>

            <Label>
              Data de nascimento:
              <Input type="date" value="1996-09-21" readOnly />
            </Label>
          </RowThreeColumns>

          <RowTwoColumns>
            <Label>
              E-mail:
              <Input type="email" value="jfernandes.dev@gmail.com" readOnly />
            </Label>

            <Label>
              Telefone:
              <Input type="phone" value="(35) 9999-9999" readOnly />
            </Label>
          </RowTwoColumns>

          <FooterForm variantJustify="right">
            <Button
              type="button"
              text="Encerrar contrato, e disponibilizar o apartamento"
              variant="danger"
            />
          </FooterForm>
        </Form>
      </ModalContent>
    </Dialog.Portal>
  );
}
