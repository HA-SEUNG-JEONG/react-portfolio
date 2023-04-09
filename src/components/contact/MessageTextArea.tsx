import { FormInputProps } from "./FormInput";

const MessageTextArea = ({ placeholder, name }: FormInputProps) => {
  return (
    <textarea
      className="bg-transparent border-b outline-none w-full focus:border-gray-500 transition-all resize-none "
      placeholder={placeholder}
      name={name}></textarea>
  );
};

export default MessageTextArea;
