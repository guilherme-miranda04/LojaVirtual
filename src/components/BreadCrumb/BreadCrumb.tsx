import { IoIosArrowForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export function BreadCrumb() {
  return (
    <div className="">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse bg-woodsmoke-600 p-2 rounded-md">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-white hover:text-royal-blue-600"
            >
              <IoHome className="text-white hover:text-royal-blue-600" />
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <IoIosArrowForward className="text-white" />
              <Link
                to="/account"
                className="ms-1 text-sm font-medium text-white hover:text-royal-blue-600 md:ms-2"
              >
                Minha Conta
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
