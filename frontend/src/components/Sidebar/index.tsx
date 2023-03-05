import { Buildings, Handshake, ChartLine, Gear, SignOut } from "phosphor-react";
import { NavLink as NavLinkRouter } from "react-router-dom";

import logoBiopark from "../../assets/logo-biopark-white.svg";
import { NavLink } from "./NavLink";
import { NavContainer, BrandLogo, LinkList } from "./styles";

export function Sidebar() {
  return (
    <NavContainer>
      <NavLinkRouter to="/">
        <BrandLogo src={logoBiopark} alt="Biopark" />
      </NavLinkRouter>

      <LinkList>
        <NavLink
          href="/buildings"
          icon={<Buildings weight="light" />}
          tooltip="Edifícios"
        />
        <NavLink
          href=""
          icon={<Handshake weight="light" />}
          tooltip="Aluguéis"
        />
        <NavLink
          href=""
          icon={<ChartLine weight="light" />}
          tooltip="Relatórios"
        />
        <NavLink
          href=""
          icon={<Gear weight="light" />}
          tooltip="Configurações"
        />
      </LinkList>

      <NavLink href="" icon={<SignOut weight="light" />} tooltip="Sair" />
    </NavContainer>
  );
}
