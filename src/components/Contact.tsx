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
    if (!email || !name) {
      alert("이메일 혹은 이름이 입력되지 않았습니다.");
    }
    resetField("name");
    resetField("email");
    resetField("message");
    window.open(`mailto:${email}`);
  };
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#212327] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col max-w-[37.5rem] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300">
            Contact
          </p>
        </div>
        <input
          {...register("name", {
            required: "이름은 필수 항목입니다.",
            minLength: {
              message: "이름은 5글자 이상으로 해주세요",
              value: 5,
            },
          })}
          className="bg-[#ccd6f6] p-2 flex justify-center "
          type="text"
          placeholder="이름"
          name="name"
        />
        <span className="text-red-500 mt-2 font-bold">
          {errors.name?.message}
        </span>
        <input
          {...register("email", {
            required: "이메일은 필수 항목입니다.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "이메일 주소가 유효하지 않습니다.",
            },
          })}
          className="my-4 p-2 bg-[#ccd6f6] flex justify-center "
          type="email"
          placeholder="이메일"
          name="email"
        />
        <span className="text-red-600 mb-2 font-bold">
          {errors.email?.message}
        </span>
        <textarea
          className="bg-[#ccd6f6] p-2 flex justify-center "
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
