/* eslint-disable react/jsx-no-useless-fragment */
import { IconProps } from "phosphor-react";
import { NavLink as NavLinkRouter } from "react-router-dom";

import { OptionMenu, Tooltip } from "../styles";

interface INavLinkProps {
  icon: IconProps;
  tooltip: string;
  href: string;
}

export function NavLink({ href, icon, tooltip }: INavLinkProps) {
  return (
    <NavLinkRouter to={href}>
      <OptionMenu>
        <>{icon}</>
        <Tooltip>{tooltip}</Tooltip>
      </OptionMenu>
    </NavLinkRouter>
  );
}
