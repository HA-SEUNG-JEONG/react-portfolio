import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { commonProps } from "../utils/props";
import FormInput from "./contact/FormInput";
import MessageTextArea from "./contact/MessageTextArea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID || "";
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID || "";
    const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        toast.success(result.text);
      } catch (error) {
        if (error instanceof Error) toast.error(error.message);
      }
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <h3 className="flex justify-center items-center mb-10 font-bold text-[30px] select-none">
          Contact Me
        </h3>
        <div className="flex flex-col lg:flex-row">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.2)}
            {...commonProps(0.3)}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center">
            <FormInput placeholder="Email" type="text" name="user_email" />
            <FormInput placeholder="Name" type="text" name="user_name" />
            <MessageTextArea placeholder="Message" name="message" />
            <button className="btn btn-lg flex items-center justify-center">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
