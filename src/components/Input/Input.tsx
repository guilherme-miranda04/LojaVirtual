import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import InputMask from "react-input-mask";

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}
export function Input({ label, type, placeholder, required }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-1/2 p-2">
      <div className="w-full">
        <label className="block text-white text-sm font-medium mb-2">
          {label}
        </label>
        {type === "cpf" ? (
          <InputMask
            className="w-full bg-woodsmoke-800 px-3 py-2.5 text-sm rounded-lg border border-woodsmoke-400 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-royal-blue-700"
            type="text"
            placeholder={placeholder}
            mask="999.999.999-99"
            required={required}
          />
        ) : type === "password" ? (
          <div className="relative">
            <input
              className="w-full bg-woodsmoke-800 px-3 py-2.5 text-sm rounded-lg border border-woodsmoke-400 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-royal-blue-700"
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              required={required}
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
          </div>
        ) : (
          <input
            className="w-full bg-woodsmoke-800 px-3 py-2.5 text-sm rounded-lg border border-woodsmoke-400 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-royal-blue-700"
            type={type}
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
    </div>
  );
}
