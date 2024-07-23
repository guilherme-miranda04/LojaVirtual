import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  hasIcon?: boolean;
  onClick?: () => void;
}

export function Button({ label, icon, hasIcon, onClick }: ButtonProps) {
  return (
    <div className="flex w-full">
      {hasIcon === true ? (
        <div className="flex w-full">
          <button
            className="flex bg-royal-blue-900 justify-center items-center text-japanese-maple-50 w-full font-bold text-xl p-3 rounded-lg hover:bg-royal-blue-800 active:scale-95 transition-transform transform"
            onClick={onClick}
          >
            {icon}
            <p className="pl-4">{label}</p>
          </button>
        </div>
      ) : (
        <div className="flex">
          <button
            className="flex bg-royal-blue-900 justify-center items-center text-japanese-maple-50 w-full font-bold text-xl p-3 rounded-lg hover:bg-royal-blue-800 active:scale-95 transition-transform transform"
            onClick={onClick}
          >
            <p className="">{label}</p>
          </button>
        </div>
      )}
    </div>
  );
}
