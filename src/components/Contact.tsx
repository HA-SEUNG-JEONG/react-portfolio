import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { commonProps } from "../utils/props";
import FormInput from "./contact/FormInput";
import MessageTextArea from "./contact/MessageTextArea";

const Contact = () => {
  const handleButtonClick = () => {
    window.location.href = "mailto:gktmd653@gmail.com";
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <h3 className="flex justify-center items-center mb-10 font-bold text-[30px]">
          Contact Me
        </h3>
        <div className="flex flex-col lg:flex-row">
          <motion.form
            variants={fadeIn("left", 0.2)}
            {...commonProps(0.3)}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center">
            <FormInput placeholder="Email" type="text" />
            <FormInput placeholder="Name" type="text" />
            <MessageTextArea placeholder="Message" />
            <button
              className="btn btn-lg flex items-center justify-center"
              onClick={handleButtonClick}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
