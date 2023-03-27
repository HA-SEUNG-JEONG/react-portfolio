import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatSquareText, BsClipboardData } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] background-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            className="cursor-pointer w-[60px] flex items-center justify-center"
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}>
            <BiHomeAlt />
          </Link>
          <Link
            className="cursor-pointer w-[60px] flex items-center justify-center"
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}>
            <BiUser />
          </Link>
          <Link
            className="cursor-pointer w-[60px] flex items-center justify-center"
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}>
            <BsClipboardData />
          </Link>
          <Link
            className="cursor-pointer w-[60px] flex items-center justify-center"
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
