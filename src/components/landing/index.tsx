import Advantages from "./advantages";
import Footer from "./footer";
import Header from "./header";
import Highlighted from "./highlighted";
import Statements from "./statements";
import Page from "../template/Page";

const Landing: React.FC = () => {
  return (
    <Page external>
      <Header />
      <Highlighted />
      <Advantages />
      <Statements />
      <Footer />
    </Page>
  );
};

export default Landing;
