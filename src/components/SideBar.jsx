import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            메일 보내기 <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[10rem] h-[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/assets/정하승의 포트폴리오"
            download="/assets/정하승의 포트폴리오"
          >
            이력서다운 <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
