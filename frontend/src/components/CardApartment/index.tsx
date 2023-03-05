import * as Dialog from "@radix-ui/react-dialog";
import { LadderSimple, Bed, CurrencyCircleDollar } from "phosphor-react";

import { RentApartmentModal } from "../RentApartmentModal";
import { RentInformationModal } from "../RentInformationModal";
import {
  Card,
  CardHeader,
  Title,
  CardBody,
  Description,
  CardFooter,
  AvailabilityTag,
} from "./styles";

interface ICardApartment {
  availability?: boolean;
}

export function CardApartment({ availability }: ICardApartment) {
  return (
    <Card>
      <CardHeader>
        <Title>Apto. 1001</Title>
      </CardHeader>

      <CardBody>
        <Description>
          <LadderSimple /> 1º andar
        </Description>
        <Description>
          <Bed /> 2 quartos
        </Description>
        <Description>
          <CurrencyCircleDollar /> R$ 1200/mês
        </Description>
      </CardBody>

      <CardFooter>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <AvailabilityTag
              variant={availability ? "available" : "unavailable"}
            >
              {availability
                ? "Disponível! Alugar agora"
                : " Alugado! Ver locatário"}
            </AvailabilityTag>
          </Dialog.Trigger>

          {availability ? <RentApartmentModal /> : <RentInformationModal />}
        </Dialog.Root>
      </CardFooter>
    </Card>
  );
}
