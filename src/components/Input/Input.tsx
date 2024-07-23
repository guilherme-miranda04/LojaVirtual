import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import InputMask from "react-input-mask";

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

const ValidationError = ({ message }: { message: string }) => (
  <p className="text-sm mt-1 hidden peer-invalid:block text-japanese-maple-600">
    {message}
  </p>
);

export function Input({ label, type, placeholder, required }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState("");

  const handleBlur = () => {
    setTouched(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="w-1/2 p-2">
      <div className="w-full">
        <label className="block text-white text-sm font-medium mb-2">
          {label}
        </label>
        {type === "cpf" ? (
          <div className="relative">
            <InputMask
              className="w-full bg-woodsmoke-800 px-3 py-2.5 text-sm rounded-lg border border-woodsmoke-400 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-royal-blue-700 peer"
              type="text"
              placeholder={placeholder}
              mask="999.999.999-99"
              required={required}
              onBlur={handleBlur}
              onChange={handleChange}
              value={value}
            />
            {required && touched && !value && (
              <ValidationError
                message={`Por favor, preencher o seu ${label}`}
              />
            )}
          </div>
        ) : type === "password" ? (
          <div className="relative">
            <input
              className="w-full bg-woodsmoke-800 px-3 py-2.5 text-sm rounded-lg border border-woodsmoke-400 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-royal-blue-700 peer"
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              required={required}
              onBlur={handleBlur}
              onChange={handleChange}
              value={value}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <MdVisibilityOff fontSize={20} className="text-white" />
              ) : (
                <MdVisibility fontSize={20} className="text-white" />
              )}
            </button>
            {required && touched && !value && (
              <ValidationError
                message={`Por favor, preencher a sua ${label}`}
              />
            )}
          </div>
        ) : type === "email" ? (
          <div className="relative">
            <input
              className="w-full bg-woodsmoke-800 px-3 py-2.5 text-sm rounded-lg border border-woodsmoke-400 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-royal-blue-700 peer"
              type={type}
              placeholder={placeholder}
              required={required}
              onBlur={handleBlur}
              onChange={handleChange}
              value={value}
            />
            {required && touched && !value && (
              <ValidationError message={`Por favor, insira um ${label}`} />
            )}
            {touched && value && !isEmailValid(value) && (
              <ValidationError
                message={`Por favor, insira um ${label} válido`}
              />
            )}
          </div>
        ) : (
          <div className="relative">
            <input
              className="w-full bg-woodsmoke-800 px-3 py-2.5 text-sm rounded-lg border border-woodsmoke-400 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-royal-blue-700 peer"
              type={type}
              placeholder={placeholder}
              required={required}
              onBlur={handleBlur}
              onChange={handleChange}
              value={value}
            />
            {required && touched && !value && (
              <ValidationError
                message={`Por favor, preencher o seu ${label}`}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
