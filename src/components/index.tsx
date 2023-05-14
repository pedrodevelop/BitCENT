import Advantages from "./landing/advantages";
import Footer from "./landing/footer";
import Header from "./landing/header";
import Highlighted from "./landing/highlighted";
import Statements from "./landing/statements";
import Page from "./template/Page";

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
