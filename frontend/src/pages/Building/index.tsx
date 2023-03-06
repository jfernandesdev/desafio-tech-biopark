import * as Dialog from "@radix-ui/react-dialog";
import { Ghost, LadderSimple, MapPinLine } from "phosphor-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { CardApartment } from "../../components/CardApartment";
import { NewApartmentModal } from "../../components/NewApartmentModal";
import { Title } from "../../components/Title";
import { api } from "../../lib/axios";
import { Container, Header, Description, ApartmentsCardList } from "./styles";

interface IApartment {
  id: string;
  number: number;
  floor: number;
  number_of_bedrooms: number;
  rent_value: number;
  availability: boolean;
}

interface IBuilding {
  id: string;
  name: string;
  address: string;
  number_of_floors: number;
  Apartments?: IApartment[];
}

export function Building() {
  const { id } = useParams<{ id: string }>();
  const [building, setBuilding] = useState<IBuilding>({} as IBuilding);

  useEffect(() => {
    async function getBuilding() {
      const { data } = await api.get(`/buildings/${id}`);
      setBuilding(data);
    }

    getBuilding();
  }, [building]);

  return building && building.id ? (
    <>
      <Header>
        <div>
          <Title title={building.name} weight="500" />

          <Description>
            <span>
              <MapPinLine />
              {building.address}
            </span>
            <span>
              <LadderSimple /> {building.number_of_floors} andares
            </span>
          </Description>
        </div>

        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button text="Novo apartamento" variant="primary" withPlusIcon />
            </Dialog.Trigger>

            <NewApartmentModal
              buildingId={building.id}
              buildingName={building.name}
            />
          </Dialog.Root>
        </div>
      </Header>

      <ApartmentsCardList>
        {building.Apartments?.map((apartment) => (
          <CardApartment key={apartment.id} data={apartment} />
        ))}
      </ApartmentsCardList>
    </>
  ) : (
    <Container>
      <div>
        <Ghost size={45} weight="light" />
        <span>Edifício não encontrado ou inexistente!</span>
      </div>
    </Container>
  );
}
