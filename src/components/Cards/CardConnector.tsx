import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardConnectorProps {
  label: string;
  routes: string;
  icon?: ReactNode;
}

export function CardConnector({ label, routes, icon }: CardConnectorProps) {
  return (
    <Link to={routes}>
      <button className="flex w-full h-32 rounded-2xl bg-woodsmoke-800 shadow-xl text-center items-center justify-center p-8  focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-royal-blue-700">
        <div className="flex gap-2 text-2xl font-bold text-center items-center text-woodsmoke-50 hover:text-white">
          {icon}
          <h1>{label}</h1>
        </div>
      </button>
    </Link>
  );
}
