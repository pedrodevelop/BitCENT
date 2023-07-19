import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/data/contexts/AuthContext";
import Loading from "../template/Loading";

interface IForceAuthProps {
  children: any;
}

const ForceAuth: React.FC<IForceAuthProps> = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  } else if (user?.email) {
    return <>{children}</>;
  } else {
    router.push("/");
    return <Loading />;
  }
};

export default ForceAuth;
