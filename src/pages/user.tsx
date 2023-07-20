import {Page, Header, Content, PageTitle} from "@/components/template";
import { IconForms } from "@tabler/icons-react";
import fakeUser from "@/data/constants/fakeUser";
import Forms from "@/components/user/Forms";

const UserRegistration: React.FC = () => {
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
};

export default UserRegistration;
