import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  message?: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<ContactForm>({ mode: "onChange" });
  const onValid = ({ email, name }: ContactForm) => {
    resetField("name");
    resetField("email");
    resetField("message");
    window.open(`mailto:${email}`);
  };
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex jusify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col max-w-[37.5rem] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">메일 보내기</p>
        </div>
        <input
          {...register("name", {
            required: "이름은 필수 항목입니다.",
            minLength: {
              message: "이름은 5글자 이상으로 해주세요",
              value: 5,
            },
          })}
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="이름"
          name="name"
        />
        <span className="text-red-600 mt-2 font-bold">
          {errors.name?.message}
        </span>
        <input
          {...register("email", {
            required: "이메일은 필수 항목입니다.",
          })}
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="이메일"
          name="email"
        />
        <span className="text-red-600 mb-2 font-bold">
          {errors.email?.message}
        </span>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="메시지"
        ></textarea>
        <button className="text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 px-4 py-3 my-8 mx-auto flex items-center">
          전송
        </button>
      </form>
    </div>
  );
};

export default Contact;
