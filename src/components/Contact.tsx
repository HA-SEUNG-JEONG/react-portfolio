import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <h3 className="flex justify-center items-center mb-10 font-bold text-[30px]">
          Contact Me
        </h3>
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center items-center"></motion.div>
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center">
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Email"
              type="text"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Name"
              type="text"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Message"></textarea>

            <a
              href="mailto:gktmd653@gmail.com"
              className="btn btn-lg flex items-center justify-center">
              Send Message
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
