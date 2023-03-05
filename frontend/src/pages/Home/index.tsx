import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "../../components/Button";
import { CardBuilding } from "../../components/CardBuilding";
import { NewBuildingModal } from "../../components/NewBuildingModal";
import { Title } from "../../components/Title";
import { useBuildings } from "../../hooks/useBuildings";
import { Container, Header, Subtitle, BuildingsCardList } from "./styles";

export function Home() {
  const { buildings } = useBuildings();

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

      <BuildingsCardList>
        {buildings.map((building) => (
          <CardBuilding key={building.id} data={building} />
        ))}
      </BuildingsCardList>
    </Container>
  );
}
