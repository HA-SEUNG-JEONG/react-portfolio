import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variant";

const Introduction = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="mb-6 text-[27px] lg:text-[40px] font-secondary font-semibold leading-[1.4]">
        <span className="mr-4">
          유저경험을 중시하는
          <br />
        </span>
        <TypeAnimation
          sequence={["프론트엔드 개발자 정하승입니다.", 2000]}
          speed={10}
          className="text-blue-600"
          wrapper="span"
          repeat={Infinity}
        />
      </motion.div>
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="mb-8 max-w-lg mx-auto lg:mx-0"></motion.p>
    </>
  );
};

export default Introduction;
