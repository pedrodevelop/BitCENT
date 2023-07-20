import {Area, Logo} from "../shared/";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <Area className="bg-black fixed z-50">
      <div className="flex items-center justify-between h-20">
        <Logo />
        <Menu />
      </div>
    </Area>
  );
};

export default Header;
