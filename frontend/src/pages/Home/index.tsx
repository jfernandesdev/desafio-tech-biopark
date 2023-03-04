import { Button } from "../../components/Button";
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
          <Button
            link="/building"
            text="Novo edifício"
            type="primary"
            withPlusIcon
          />
        </div>
      </Header>
    </Container>
  );
}
