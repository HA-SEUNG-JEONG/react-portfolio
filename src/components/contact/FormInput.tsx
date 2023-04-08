export interface FormInputProps {
  placeholder: string;
  type?: string;
}

const FormInput = ({ placeholder, type }: FormInputProps) => {
  return (
    <input
      className="bg-transparent border-b py-3 outline-none w-full focus:border-gray-500 transition-all"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default FormInput;
