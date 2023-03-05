import * as Dialog from "@radix-ui/react-dialog";
import { LadderSimple, MapPinLine } from "phosphor-react";

import { Button } from "../../components/Button";
import { RentApartmentModal } from "../../components/RentApartmentModal";
import { RentInformationModal } from "../../components/RentInformationModal";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function Building() {
  return (
    <Container>
      <Title title="Edifício Residencial A" />
      <div>
        <span>
          <MapPinLine />
          Localizado na Rua A, 1001 - Biopark
        </span>
        <span>
          <LadderSimple /> 4 andares
        </span>
      </div>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            text="Modal Alugar Apto. (apenas marcação)"
            variant="secondary"
          />
        </Dialog.Trigger>

        <RentApartmentModal />
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            text="Modal Informações de aluguél. (apenas marcação)"
            variant="secondary"
          />
        </Dialog.Trigger>

        <RentInformationModal />
      </Dialog.Root>
    </Container>
  );
}
