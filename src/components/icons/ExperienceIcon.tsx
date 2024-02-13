import { BiAccessibility } from "react-icons/bi";
import { Link } from "react-scroll";

const ExperienceIcon = () => {
    return (
        <Link
            className="cursor-pointer w-[60px] flex items-center justify-center"
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
        >
            <BiAccessibility />
        </Link>
    );
};

export default ExperienceIcon;
