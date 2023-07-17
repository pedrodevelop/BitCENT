import Page from "@/components/template/Page";
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import { IconForms } from "@tabler/icons-react";
import fakeUser from "@/data/constants/fakeUser";
import PageTitle from "@/components/template/PageTitle";
import Forms from "@/components/user/Forms";

export default function UserRegistration() {
  return (
    <Page>
      <Header />
      <Content>
        <PageTitle
          icon={<IconForms />}
          main="Dados cadastrais"
          secondary={`Informações de ${fakeUser.name}`}
        />
        <Forms />
      </Content>
    </Page>
  );
}
