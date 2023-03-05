import * as Dialog from "@radix-ui/react-dialog";
import { LadderSimple, MapPinLine } from "phosphor-react";

import { Button } from "../../components/Button";
import { CardApartment } from "../../components/CardApartment";
import { NewApartmentModal } from "../../components/NewApartmentModal";
import { Title } from "../../components/Title";
import { Container, Header, Description, ApartmentsCardList } from "./styles";

export function Building() {
  return (
    <Container>
      <Header>
        <div>
          <Title title="Edifício Residencial A" weight="500" />
          <Description>
            <span>
              <MapPinLine />
              Localizado na Rua A, 1001 - Biopark
            </span>
            <span>
              <LadderSimple /> 4 andares
            </span>
          </Description>
        </div>

        <div>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button text="Novo apartamento" variant="primary" withPlusIcon />
            </Dialog.Trigger>

            <NewApartmentModal />
          </Dialog.Root>
        </div>
      </Header>

      <ApartmentsCardList>
        <CardApartment />
        <CardApartment availability />
        <CardApartment />
        <CardApartment availability />
        <CardApartment />
        <CardApartment />
        <CardApartment availability />
      </ApartmentsCardList>
    </Container>
  );
}
