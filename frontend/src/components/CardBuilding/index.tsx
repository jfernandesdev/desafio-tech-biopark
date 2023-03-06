import { LadderSimple, MapPinLine, ArrowSquareUpRight } from "phosphor-react";
import { Link } from "react-router-dom";

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

interface ICardBuilding {
  data: {
    id: string;
    name: string;
    address: string;
    number_of_floors: number;
    Apartments?: {
      id: string;
      availability: boolean;
    }[];
  };
}

export function CardBuilding({ data }: ICardBuilding) {
  const { Apartments } = data;

  const apartmentsAvailability = Apartments?.reduce(
    (acc, { availability }) => ({
      total: acc.total + 1,
      available: availability ? acc.available + 1 : acc.available,
      unavailable: !availability ? acc.unavailable + 1 : acc.unavailable,
    }),
    { total: 0, available: 0, unavailable: 0 }
  );

  const { total, available, unavailable } = apartmentsAvailability || {};

  return (
    <Card>
      <Link to={`/building/${data.id}`}>
        <CardHeader>
          <Title>{data.name}</Title>
          <NumberOfApartments>
            <TotalApartments>
              <strong>{total || 0}</strong>
              {total && total > 1 ? "aptos" : "apto"}
            </TotalApartments>
            <div>
              <AvailableApartment>
                {available || 0} disponível
              </AvailableApartment>
              <UnavailableApartment>
                {unavailable || 0} alugado
              </UnavailableApartment>
            </div>
          </NumberOfApartments>
        </CardHeader>

        <CardBody>
          <div>
            <Description>
              <MapPinLine /> {data.address}
            </Description>
            <Description>
              <LadderSimple /> {data.number_of_floors} andares
            </Description>
          </div>
          <MoreDetailsBtn>
            Mais detalhes <ArrowSquareUpRight size={16} weight="bold" />
          </MoreDetailsBtn>
        </CardBody>
      </Link>
    </Card>
  );
}
