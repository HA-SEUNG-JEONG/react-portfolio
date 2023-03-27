import { BiUser } from "react-icons/bi";
import { Link } from "react-scroll";

const AboutIcon = () => {
  return (
    <Link
      className="cursor-pointer w-[60px] flex items-center justify-center"
      to="about"
      activeClass="active"
      smooth={true}
      spy={true}>
      <BiUser />
    </Link>
  );
};

export default AboutIcon;
