import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "../../components/Button";
import { NewBuildingModal } from "../../components/NewBuildingModal";
import { Title } from "../../components/Title";
import { Container, Header, Subtitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <div>
          <Title title="Edifícios Biopark" />
          <Subtitle>5 cadastrados</Subtitle>
        </div>
        <div>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button text="Novo edifício" variant="primary" withPlusIcon />
            </Dialog.Trigger>

            <NewBuildingModal />
          </Dialog.Root>
        </div>
      </Header>
    </Container>
  );
}
