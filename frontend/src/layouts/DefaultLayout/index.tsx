import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  );
}
