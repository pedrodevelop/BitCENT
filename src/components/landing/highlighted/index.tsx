import Area from "../common/Area";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg";
import ResponsiveImage from "./../common/ResponsiveImage";

const Highlighted: React.FC = () => {
  return (
    <Area id="getting-started" className="pt-20">
      <div className={`flex items-center h-[500px] justify-around`}>
        <Slogan />
        <ResponsiveImage
          image={principal}
          className="rotate-3 hidden md:inline"
        />
      </div>
    </Area>
  );
};

export default Highlighted;
