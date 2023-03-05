import * as Dialog from "@radix-ui/react-dialog";
import { LadderSimple, Bed, CurrencyCircleDollar } from "phosphor-react";

import { priceFormatter } from "../../util/priceFormatter";
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

export interface ICardApartment {
  data: {
    id: string;
    number: number;
    floor: number;
    number_of_bedrooms: number;
    rent_value: number;
    availability: boolean;
  };
}

export function CardApartment({ data }: ICardApartment) {
  return (
    <Card>
      <CardHeader>
        <Title>Apto. {data.number}</Title>
      </CardHeader>

      <CardBody>
        <Description>
          <LadderSimple /> {data.floor}º andar
        </Description>
        <Description>
          <Bed /> {data.number_of_bedrooms} quartos
        </Description>
        <Description>
          <CurrencyCircleDollar /> {priceFormatter.format(data.rent_value)}/mês
        </Description>
      </CardBody>

      <CardFooter>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <AvailabilityTag
              variant={data.availability ? "available" : "unavailable"}
            >
              {data.availability
                ? "Disponível! Alugar agora"
                : " Alugado! Ver locatário"}
            </AvailabilityTag>
          </Dialog.Trigger>

          {data.availability ? (
            <RentApartmentModal />
          ) : (
            <RentInformationModal />
          )}
        </Dialog.Root>
      </CardFooter>
    </Card>
  );
}
