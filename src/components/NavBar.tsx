import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "./SideBar";
import { Link } from "react-scroll/modules";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navOnClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#212327] text-gray-300">
      <div>
        <AiFillHome style={{ width: "3.1rem" }} />
      </div>

      <nav className="hidden md:flex">
        <ul className="flex">
          <li className="hover:scale-125 font-bold hover:duration-300">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:scale-125 font-bold hover:duration-300">
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skill
            </Link>
          </li>
          <li className="hover:scale-125 font-bold hover:duration-300">
            <Link to="work" spy={true} smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="hover:scale-125 font-bold hover:duration-300">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div onClick={navOnClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes className="hover:opacity-10" />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Projects</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>
      <SideBar />
    </div>
  );
};

export default NavBar;
