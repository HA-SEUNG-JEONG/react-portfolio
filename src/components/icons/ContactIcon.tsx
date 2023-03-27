import { BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const ContactIcon = () => {
  return (
    <Link
      className="cursor-pointer w-[60px] flex items-center justify-center"
      to="contact"
      activeClass="active"
      smooth={true}
      spy={true}>
      <BsChatSquareText />
    </Link>
  );
};

export default ContactIcon;
