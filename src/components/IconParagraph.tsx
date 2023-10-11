import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  slug: string;
  id:number
}

function IconParagraph({ slug,id }: Props) {
  //     const iconPlatformMap: { [key: string]: IconType } = {
  //     pc: FaWindows,
  //     playstation: FaPlaystation,
  //     xbox: FaXbox,
  //     nintendo: SiNintendo,
  //     mac: FaApple,
  //     linux: FaLinux,
  //     ios: MdPhoneIphone,
  //     web: BsGlobe,
  //     android: FaAndroid,
  //   };


  if (slug === "pc") return (
    <span>
      <FaWindows />
    </span>
  );
  if (slug === "playstation") return <span key={id}><FaPlaystation /></span>;
  if (slug === "xbox") return <span key={id}><FaXbox /></span>;
  if (slug === "nintendo") return <span key={id}><SiNintendo /></span>;
  if (slug === "mac") return <span key={id}><FaApple /></span>;
  if (slug === "linux") return <span key={id}><FaLinux /></span>;
  if (slug === "ios") return <span key={id}><MdPhoneIphone /></span>;
  if (slug === "web") return <span key={id}><BsGlobe /></span>;
  if (slug === "android") return <span key={id}><FaAndroid /></span>;

}

export default IconParagraph;
