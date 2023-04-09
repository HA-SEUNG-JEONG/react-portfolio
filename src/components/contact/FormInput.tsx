export interface FormInputProps {
  placeholder: string;
  type?: string;
  name?: string;
  message?: string;
}

const FormInput = ({ placeholder, type, name }: FormInputProps) => {
  return (
    <input
      className="bg-transparent border-b py-3 outline-none w-full focus:border-gray-500 transition-all"
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

export default FormInput;
