import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variant";

const About = () => {
  const [ref] = useInView({ threshold: 0.5 });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}></motion.div>
          <motion.div className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2">About Me</h2>
            <h3 className="h3 mb-4">Front-End Developer</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              molestiae. Hic explicabo pariatur repellendus amet dicta totam
              fuga tempore nihil harum voluptate odio aliquid sapiente provident
              recusandae, animi, perspiciatis veniam.
            </p>
            <div className="flex gap-6 lg:gap-x-10 mb-12"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
