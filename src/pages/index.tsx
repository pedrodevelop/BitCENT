import Finance from "@/components/finance";
import Landing from "@/components/landing";
import Loading from "@/components/template/Loading";
import AuthContext from "@/data/contexts/AuthContext";
import { useContext } from "react";

const Home: React.FC = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  return user ? <Finance /> : <Landing />;
};

export default Home;
