import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-scroll";

const ContactIcon = () => {
  return (
    <Link
      className="cursor-pointer w-[60px] flex items-center justify-center"
      to="contact"
      activeClass="active"
      smooth={true}
      spy={true}>
      <RiContactsFill />
    </Link>
  );
};

export default ContactIcon;
