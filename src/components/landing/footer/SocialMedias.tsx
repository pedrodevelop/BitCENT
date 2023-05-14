import {
  IconBrandGithub,
} from "@tabler/icons-react";
import SocialMedia from "./SocialMedia";

const SocialMedias: React.FC = () => {
  return (
    <div className="flex">
      <SocialMedia
        icon={<IconBrandGithub />}
        url="https://github.com/pedrodevelop"
      />
    </div>
  );
};

export default SocialMedias;
