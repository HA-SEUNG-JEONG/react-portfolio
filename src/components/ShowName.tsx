import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const ShowName = () => {
  return (
    <motion.h1
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 1 }}
      className="text-[55px] font-bold leading-[0.8] lg:text-[110px] lg:mb-4 mb-4">
      정하승
    </motion.h1>
  );
};

export default ShowName;
