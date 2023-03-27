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
        className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold leading-[1]">
        <span className="mr-4">
          유저경험을 중시하는
          <br />
        </span>
        <TypeAnimation
          sequence={["프론트엔드 개발자입니다.", 2000]}
          speed={50}
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
        className="mb-8 max-w-lg mx-auto lg:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda
        reprehenderit dicta animi ut dolor quisquam nisi suscipit.
      </motion.p>
    </>
  );
};

export default Introduction;
