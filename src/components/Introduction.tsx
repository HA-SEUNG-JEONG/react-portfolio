import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { commonProps } from "../utils/props";
import TypingIntroduction from "./TypingIntroduction";

const Introduction = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.4)}
        {...commonProps(1)}
        className="mb-6 text-[27px] lg:text-[40px] font-secondary font-semibold leading-[1.4]">
        <span className="mr-4">
          유저경험을 중시하는
          <br />
        </span>
        <TypingIntroduction />
      </motion.div>
      <motion.p
        variants={fadeIn("up", 0.3)}
        {...commonProps(1)}
        className="mb-8 max-w-lg mx-auto lg:mx-0"></motion.p>
    </>
  );
};

export default Introduction;
