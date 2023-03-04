import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container, Content } from "./styles";

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Sidebar />

      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}
