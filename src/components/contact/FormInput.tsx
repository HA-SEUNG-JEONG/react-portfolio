export interface FormInputProps {
  placeholder: string;
  type?: string;
  name?: string;
  message?: string;
}

const FormInput = ({ placeholder, type, name }: FormInputProps) => {
  return (
    <input
      className="bg-transparent placeholder:text-gray-900 border-b border-gray-900 py-3 outline-none w-full focus:border-gray-500 transition-all"
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

export default FormInput;
