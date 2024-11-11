import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  style?: "default" | "transparent";
  width?: "default" | "full";
  direction?: "ltr" | "rtl";
  icon?: ReactNode;
  hasIcon?: boolean;
  onClick?: () => void;
}

export function Button({
  label,
  size = "medium",
  style = "default",
  width = "default",
  direction = "ltr",
  icon,
  hasIcon,
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    small: "text-sm p-2",
    medium: "text-base p-3",
    large: "text-lg p-4",
  };

  const styleClasses = {
    default: "bg-royal-blue-900 border-0 hover:bg-royal-blue-800",
    transparent:
      "bg-transparent border-[3px] border-royal-blue-800 hover:bg-royal-blue-900 hover:bg-opacity-25",
  };

  const widthClasses = {
    default: "",
    full: "w-full",
  };

  const directionClasses = {
    ltr: "ltr",
    rtl: "rtl",
  };

  return (
    <div className={`flex ${widthClasses[width]}`}>
      {hasIcon === true ? (
        <div
          className="flex w-full items-center"
          dir={directionClasses[direction]}
        >
          <button
            className={`flex justify-center items-center text-japanese-maple-50 w-full font-bold rounded-lg active:scale-95 transition-transform transform ${sizeClasses[size]} ${styleClasses[style]}`}
            onClick={onClick}
          >
            {icon}
            <p className="ltr:pl-2 rtl:pr-2">{label}</p>
          </button>
        </div>
      ) : (
        <div className="flex ">
          <button
            className={`flex justify-center items-center text-japanese-maple-50 w-full font-bold rounded-lg  active:scale-95 transition-transform transform ${sizeClasses[size]} ${styleClasses[style]}`}
            onClick={onClick}
          >
            <p className="">{label}</p>
          </button>
        </div>
      )}
    </div>
  );
}
