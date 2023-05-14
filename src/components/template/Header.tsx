import Greeting from "./Greeting";
import UserMenu from "./UserMenu";

const Header: React.FC = () => {
  return (
    <div 
      className={`flex justify-between items-center
                p-7 border-b border-zinc-900`}>
      <Greeting />
      <UserMenu />
    </div>
  );
};

export default Header;
