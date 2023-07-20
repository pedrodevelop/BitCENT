import {Greeting, UserMenu} from "./index";

export const Header: React.FC = () => {
  return (
    <div 
      className={`flex justify-between items-center
                p-7 border-b border-zinc-900`}>
      <Greeting />
      <UserMenu />
    </div>
  );
};

