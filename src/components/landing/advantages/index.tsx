import {Area} from "../shared/";
import Advantage from "./Advantage";
import advantage1 from "../../../../public/vantagem-1.jpg";
import advantage2 from "../../../../public/vantagem-2.jpg";
import advantage3 from "../../../../public/vantagem-3.jpg";

const Advantages: React.FC = () => {
  return (
    <Area id="advantages" className="bg-black py-16 sm:py-36">
      <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
        <Advantage
          image={advantage1}
          title="Gerenciador financeiro completo e simples de usar"
          subtitle="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
        />

        <Advantage
          image={advantage2}
          title="Organizado para você nunca mais esquecer uma conta"
          subtitle="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
          inverter
        />
        <Advantage
          image={advantage3}
          title="Ideal para planejamento financeiro"
          subtitle="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
        />
      </div>
    </Area>
  );
};

export default Advantages;
