import { GiSkills } from "react-icons/gi";
import { Link } from "react-scroll";

const SkillIcon = () => {
  return (
    <Link
      className="cursor-pointer w-[60px] flex items-center justify-center"
      to="about"
      activeClass="active"
      smooth={true}
      spy={true}>
      <GiSkills />
    </Link>
  );
};

export default SkillIcon;
