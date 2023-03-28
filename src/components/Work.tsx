import Img1 from "../assets/main_logo.png";
import Img2 from "../assets/morakcover.png";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <h2 className="h2 leading-tight">최근 프로젝트</h2>
            <p className="max-w-sm mb-16">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              quos vel reprehenderit, consequuntur, iusto officiis accusantium
              aspernatur velit hic suscipit ipsam. Ipsum omnis incidunt magnam?
              Quod unde nam numquam labore.
            </p>
            <button className="btn btn-sm">프로젝트 보러가기</button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/10 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="transition-all cursor-pointer duration-500 group-hover:scale-105"
                src={Img1}
                alt="swap"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">SWAP</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/10 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="transition-all cursor-pointer duration-500 group-hover:scale-105"
                src={Img2}
                alt="morakmorak"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Morak Morak</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
