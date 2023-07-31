import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variant";
import { commonProps } from "../utils/props";

const SocialLink = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.7)}
      {...commonProps(0.3)}
      className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
      <a
        href="https://github.com/HA-SEUNG-JEONG"
        className="hover:opacity-60 text-gray-900"
        aria-label="Github">
        <FaGithub size={36} />
      </a>
      <a
        href="https://www.linkedin.com/in/haseung-jeong-50b831229/"
        className="hover:opacity-60 text-[#0077b5]"
        aria-label="LinkedIn">
        <FaLinkedin size={36} />
      </a>
    </motion.div>
  );
};

export default SocialLink;
