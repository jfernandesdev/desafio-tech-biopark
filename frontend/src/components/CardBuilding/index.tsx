import { LadderSimple, MapPinLine, ArrowSquareUpRight } from "phosphor-react";

import {
  Card,
  CardHeader,
  Title,
  NumberOfApartments,
  TotalApartments,
  AvailableApartment,
  UnavailableApartment,
  CardBody,
  Description,
  MoreDetailsBtn,
} from "./styles";

export function CardBuilding() {
  return (
    <Card>
      <CardHeader>
        <Title>Edifício Residencial A</Title>
        <NumberOfApartments>
          <TotalApartments>
            <strong>10</strong> aptos
          </TotalApartments>
          <div>
            <AvailableApartment>7 disponíveis</AvailableApartment>
            <UnavailableApartment>3 alugados</UnavailableApartment>
          </div>
        </NumberOfApartments>
      </CardHeader>

      <CardBody>
        <div>
          <Description>
            <MapPinLine /> Localizado na Rua A, 1001 - Biopark
          </Description>
          <Description>
            <LadderSimple /> 4 andares
          </Description>
        </div>
        <MoreDetailsBtn>
          Mais detalhes <ArrowSquareUpRight size={16} weight="bold" />
        </MoreDetailsBtn>
      </CardBody>
    </Card>
  );
}
