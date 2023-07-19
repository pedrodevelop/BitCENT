import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import AuthContext from "@/data/contexts/AuthContext";

const Menu: React.FC = () => {
  const { googleLogin } = useContext(AuthContext);
  return (
    <div className="flex gap-2">
      <MenuItem url="#getting-started" className="hidden sm:flex">
        Início
      </MenuItem>
      <MenuItem url="#advantages" className="hidden sm:flex">
        Vantagens
      </MenuItem>
      <MenuItem url="#statements" className="hidden sm:flex">
        Depoimentos
      </MenuItem>
      <MenuItem
        onClick={googleLogin}
        className="bg-gradient-to-r from-indigo-600 to-cyan-600"
      >
        <div className="flex items-center gap-2">
          <IconBrandGoogle size={15} />
          <span>Login</span>
        </div>
      </MenuItem>
    </div>
  );
};

export default Menu;
