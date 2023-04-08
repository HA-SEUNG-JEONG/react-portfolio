import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { commonProps } from "../utils/props";

const AnimatedMiddleButton = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      {...commonProps(1)}
      className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"></motion.div>
  );
};

export default AnimatedMiddleButton;
