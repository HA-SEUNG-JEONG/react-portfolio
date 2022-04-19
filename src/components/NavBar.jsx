import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "./SideBar";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navOnClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <AiFillHome style={{ width: "3.1rem" }} />
      </div>

      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div onClick={navOnClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <SideBar />
    </div>
  );
};

export default NavBar;
