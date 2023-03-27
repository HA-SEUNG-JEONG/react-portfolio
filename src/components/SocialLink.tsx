import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../variant";

const SocialLink = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 1 }}
      className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
      <a href="https://github.com/HA-SEUNG-JEONG">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/haseung-jeong-50b831229/">
        <FaLinkedin />
      </a>
    </motion.div>
  );
};

export default SocialLink;
