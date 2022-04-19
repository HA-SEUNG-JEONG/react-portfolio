import { AiFillHome } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="text-gray-200 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
        <AiFillHome style={{ width: "3.1rem" }} />
      </div>

      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div className="hidden">
        <FaBars />
      </div>

      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
