import User from "@/logic/core/user/User";
import { googleLogin, logout, monitorUser } from "@/logic/firebase/auth/Auth";
import { createContext, useEffect, useState } from "react";

interface IAuthProps {
  loading: boolean;
  user: User | null;
  googleLogin: () => Promise<User | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<IAuthProps>({
  loading: true,
  user: null,
  googleLogin: async () => null,
  logout: async () => {},
});

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async () => {
    const _user = await googleLogin();
    setUser(_user);
    return _user;
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  useEffect(() => {
    const finish = monitorUser(user => {
      setUser(user)
      setLoading(false)
    })
    return () => finish()
  }, [])

  return (
    <AuthContext.Provider
      value={{ loading, user, googleLogin: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
