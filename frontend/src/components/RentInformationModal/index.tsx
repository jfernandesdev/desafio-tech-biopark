import * as Dialog from "@radix-ui/react-dialog";
import { LadderSimple, Bed, CurrencyCircleDollar, X } from "phosphor-react";
import { useState, useEffect } from "react";

import { api } from "../../lib/axios";
import { formatDate } from "../../util/dateFormatter";
import { priceFormatter } from "../../util/priceFormatter";
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
import { IApartment } from "./Interfaces";

interface IRentInformationModal {
  apartmentId: string;
}
export function RentInformationModal({ apartmentId }: IRentInformationModal) {
  const [rent, setRent] = useState<IApartment>();

  useEffect(() => {
    async function getApartment() {
      const { data } = await api.get(`/apartments/${apartmentId}`);

      const formattedData = {
        ...data,
        lastRent: {
          ...data.lastRent,
          start_date: data.lastRent.start_date
            ? formatDate(data.lastRent.start_date)
            : data.lastRent.start_date,
          end_date: data.lastRent.end_date
            ? formatDate(data.lastRent.start_date)
            : data.lastRent.end_date,
          tenant: {
            ...data.lastRent.tenant,
            date_of_birth: data.lastRent.tenant.date_of_birth
              ? formatDate(data.lastRent.tenant.date_of_birth)
              : data.lastRent.tenant.date_of_birth,
          },
        },
      };

      setRent(formattedData);
    }

    getApartment();
  }, [apartmentId]);

  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>
          Apartamento <span>nº {rent?.apartment.number}</span>
        </ModalTitle>

        <SubtitleInfo>
          <span>
            <LadderSimple /> {rent?.apartment.floor}º andar
          </span>
          <span>
            <Bed />
            {rent?.apartment.number_of_bedrooms} quartos
          </span>
          <span>
            <CurrencyCircleDollar />
            {priceFormatter.format(rent?.apartment.rent_value || 0)}/mês
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
              <Input value={rent?.lastRent?.start_date} readOnly />
            </Label>

            <Label>
              Data de término:
              <Input value={rent?.lastRent?.end_date} readOnly />
            </Label>
          </RowThreeColumns>

          <strong>Dados do Locatário:</strong>

          <RowThreeColumns>
            <Label>
              Nome completo:
              <Input value={rent?.lastRent?.tenant.name} readOnly />
            </Label>

            <Label>
              CPF:
              <Input value={rent?.lastRent?.tenant.cpf} readOnly />
            </Label>

            <Label>
              Data de nascimento:
              <Input value={rent?.lastRent?.tenant.date_of_birth} readOnly />
            </Label>
          </RowThreeColumns>

          <RowTwoColumns>
            <Label>
              E-mail:
              <Input value={rent?.lastRent?.tenant.email} readOnly />
            </Label>

            <Label>
              Telefone:
              <Input value={rent?.lastRent?.tenant.phone} readOnly />
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
