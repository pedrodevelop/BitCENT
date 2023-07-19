import AuthContext from "@/data/contexts/AuthContext";
import { useContext } from "react";

const Greeting: React.FC = () => {
  const { user } = useContext(AuthContext);

  function renderizarNome() {
    return (
      <span className="hidden sm:inline">{user?.name?.split(" ")[0]}</span>
    );
  }

  return <div className={`text-3xl font-black`}>Olá {renderizarNome()} 👋</div>;
};

export default Greeting;
