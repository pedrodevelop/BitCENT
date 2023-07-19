import Image from "next/image";
import loading from "../../../public/loading.gif";
import Page from "./Page";

const Loading: React.FC = () => {
  return (
    <Page external className="justify-center items-center">
      <Image priority src={loading} alt="loading" width={40} height={40} />
    </Page>
  );
};

export default Loading;
