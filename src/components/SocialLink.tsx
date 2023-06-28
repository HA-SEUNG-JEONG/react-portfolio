import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../variant";
import { commonProps } from "../utils/props";

const SocialLink = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.7)}
      {...commonProps(1)}
      className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
      <a
        href="https://github.com/HA-SEUNG-JEONG"
        className="hover:opacity-60 text-gray-900">
        <FaGithub size={36} />
      </a>
      <a
        href="https://www.linkedin.com/in/haseung-jeong-50b831229/"
        className="hover:opacity-60 text-[#0077b5]">
        <FaLinkedin size={36} />
      </a>
    </motion.div>
  );
};

export default SocialLink;
