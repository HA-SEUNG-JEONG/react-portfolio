import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-scroll";

const HomeIcon = () => {
  return (
    <Link
      className="cursor-pointer w-[60px] flex items-center justify-center"
      to="home"
      activeClass="active"
      smooth={true}
      spy={true}
      offset={-200}>
      <BiHomeAlt />
    </Link>
  );
};

export default HomeIcon;
