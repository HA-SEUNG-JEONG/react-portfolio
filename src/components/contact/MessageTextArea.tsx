import { FormInputProps } from "./FormInput";

const MessageTextArea = ({ placeholder }: FormInputProps) => {
  return (
    <textarea
      className="bg-transparent border-b py-12 outline-none w-full focus:border-gray-500 transition-all resize-none mb-12"
      placeholder={placeholder}></textarea>
  );
};

export default MessageTextArea;
