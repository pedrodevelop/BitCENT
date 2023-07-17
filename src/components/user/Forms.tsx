import useForm from "@/data/hooks/useForm";
import MiniForm from "../template/MiniForm";
import fakeUser from "@/data/constants/fakeUser";
import Usuario from "@/logic/core/user/User";
import { TextInput } from "@mantine/core";
import {
  FormatCpf,
  DesformatCpf,
  FormatCellphone,
  DesformatCellphone,
  isBetween,
} from "@/logic/utils";

const Forms = () => {
  const { data, changeAttrValue } = useForm<Usuario>(fakeUser);

  return (
    <div className="flex flex-col gap-5">
      <MiniForm
        title="Seu nome"
        description="Como você gostaria de ser chamado"
        footerMessage="O nome deve possuir entre 3 e 80 caracteres,
        mais que isso já é um texto"
        canSave={isBetween(data.name, 3, 80)}
        save={() => {
          alert("Teste");
        }}
      >
        <TextInput value={data.name} onChange={changeAttrValue("name")} />
      </MiniForm>
      <MiniForm
        title="CPF"
        description="Seu CPF é usado internamente pelo sistema."
        footerMessage="Pode relaxar, daqui ele não sai!"
        canSave={true}
        save={() => {
          alert("Teste");
        }}
      >
        <TextInput
          value={FormatCpf(data.cpf ?? "")}
          onChange={changeAttrValue("cpf", DesformatCpf)}
        />
      </MiniForm>
      <MiniForm
        title="Telefone"
        description="Usado para notificações importantes sobre a sua conta."
        footerMessage="Se receber ligação a cobrar, não foi a gente!"
        canSave={true}
        save={() => {
          alert("Teste");
        }}
      >
        <TextInput
          value={FormatCellphone(data.cellphone ?? '')}
          onChange={changeAttrValue("cellphone", DesformatCellphone)}
        />
      </MiniForm>
    </div>
  );
};

export default Forms;
