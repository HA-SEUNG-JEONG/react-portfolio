import { BsClipboardData } from "react-icons/bs";
import { Link } from "react-scroll";

const WorkIcon = () => {
  return (
    <Link
      className="cursor-pointer w-[60px] flex items-center justify-center"
      to="work"
      activeClass="active"
      smooth={true}
      spy={true}>
      <BsClipboardData />
    </Link>
  );
};

export default WorkIcon;
