import { AiFillProject } from "react-icons/ai";
import { Link } from "react-scroll";

const ProjectIcon = () => {
  return (
    <Link
      className="cursor-pointer w-[60px] flex items-center justify-center"
      to="work"
      activeClass="active"
      smooth={true}
      spy={true}>
      <AiFillProject />
    </Link>
  );
};

export default ProjectIcon;