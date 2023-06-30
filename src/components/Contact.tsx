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

    if (formRef?.current) {
      const emailInput: HTMLInputElement | null =
        formRef?.current?.elements.namedItem("user_email") as HTMLInputElement;

      const userEmail = emailInput.value.trim();

      if (!userEmail || !validateEmail(userEmail)) {
        toast.error("이메일이 유효하지 않습니다. 다시 한번 확인해주세요.");
        return;
      }

      try {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        if (result.text === "OK") toast.success("메일이 발송되었습니다!");
      } catch (error) {
        if (error instanceof Error) toast.error(error.message);
      }
    }
  };

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <section className="py-16 lg:section text-gray-900 mt-48" id="contact">
      <div className="container mx-auto flex flex-col items-center">
        <h3 className="flex justify-center items-center mb-10 font-bold text-[30px] select-none">
          Contact Me
        </h3>
        <div className="flex flex-col lg:flex-row w-[50rem]">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 border border-gray-900 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center">
            <FormInput placeholder="Email" type="text" name="user_email" />
            <FormInput placeholder="Name" type="text" name="user_name" />
            <MessageTextArea placeholder="Message" name="message" />
            <button className="btn btn-lg flex items-center justify-center">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
