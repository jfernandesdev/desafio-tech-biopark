import * as Dialog from "@radix-ui/react-dialog";
import { Ghost, LadderSimple, MapPinLine } from "phosphor-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { CardApartment } from "../../components/CardApartment";
import { NewApartmentModal } from "../../components/NewApartmentModal";
import { Title } from "../../components/Title";
import { api } from "../../lib/axios";
import { Container, Header, Description, ApartmentsCardList } from "./styles";

interface IBuilding {
  id: string;
  name: string;
  address: string;
  number_of_floors: number;
}

interface IApartment {
  id: string;
  number: number;
  floor: number;
  number_of_bedrooms: number;
  rent_value: number;
  availability: boolean;
}

export function Building() {
  const { id } = useParams<{ id: string }>();
  const [building, setBuilding] = useState<IBuilding | null>(null);
  const [apartments, setApartments] = useState<IApartment[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: buildingData } = await api.get(`/buildings/${id}`);
        setBuilding(buildingData);

        const { data: apartmentsData } = await api.get(
          `/buildings/${id}/apartments`
        );
        setApartments(apartmentsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  if (!building) {
    return <p>Loading...</p>;
  }

  const { name, address, number_of_floors } = building;

  return building.id ? (
    <>
      <Header>
        <div>
          <Title title={name} weight="500" />

          <Description>
            <span>
              <MapPinLine />
              {address}
            </span>
            <span>
              <LadderSimple />
              {number_of_floors} andares
            </span>
          </Description>
        </div>

        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button text="Novo apartamento" variant="primary" withPlusIcon />
            </Dialog.Trigger>

            <NewApartmentModal buildingId={building.id} buildingName={name} />
          </Dialog.Root>
        </div>
      </Header>

      <ApartmentsCardList>
        {apartments?.map((apartment) => (
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
