import { EnvelopeSimple } from "phosphor-react";

import avatarBiopark from "../../assets/avatar-biopark.svg";
import {
  HeaderContainer,
  NotificationButton,
  ProfileWrapper,
  Avatar,
  NameProfile,
  EmailProfile,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NotificationButton
        aria-label="notification"
        title="Me contrata Biopark :)"
      >
        <EnvelopeSimple size={32} weight="light" />
      </NotificationButton>

      <ProfileWrapper>
        <Avatar src={avatarBiopark} alt="Vendas Biopark" />

        <div>
          <NameProfile>Vendas Biopark</NameProfile>
          <EmailProfile>vendas@biopark.com.br</EmailProfile>
        </div>
      </ProfileWrapper>
    </HeaderContainer>
  );
}
