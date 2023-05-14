import fakeUser from "@/data/constants/fakeUser";

const Greeting: React.FC = () => {
  const usuario = fakeUser;

  function renderizarNome() {
    return (
      <span className="hidden sm:inline">{usuario?.name?.split(" ")[0]}</span>
    );
  }

  return <div className={`text-3xl font-black`}>Olá {renderizarNome()} 👋</div>;
};

export default Greeting;
