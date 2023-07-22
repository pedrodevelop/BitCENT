import { createContext, useEffect, useState } from "react";
import {
  loginWithGoogle,
  logoutUser,
  monitorAuth,
  saveUser,
} from "@/logic/core/user/Services";
import User from "@/logic/core/user/User";
import { logout } from "@/logic/firebase/auth/Auth";

interface IAuthProps {
  loading: boolean;
  user: User | null;
  googleLogin: () => Promise<User | null>;
  logout: () => Promise<void>;
  updateUser: (newUser: User) => Promise<void>;
}

const AuthContext = createContext<IAuthProps>({
  loading: true,
  user: null,
  googleLogin: async () => null,
  logout: async () => {},
  updateUser: async () => {},
});

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async () => {
    const _user = await loginWithGoogle();
    setUser(_user);
    return _user;
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
  };

  const updateUser = async (newUser: User) => {
    if (user && user.email !== newUser.email) return logout();
    if (user && newUser && user.email === newUser.email) {
      await saveUser(newUser);
      setUser(newUser);
    }
  };

  useEffect(() => {
    const finish = monitorAuth((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => finish();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        googleLogin: handleLogin,
        logout: handleLogout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
