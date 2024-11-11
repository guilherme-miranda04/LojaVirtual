import {
  HiOutlineHeart,
  HiOutlineSearch,
  HiOutlineShoppingCart,
} from "react-icons/hi";

import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getRoutesMenu } from "../assets/routes/RoutesLink";

export function Header() {
  const accountType = "admin";

  const routes = getRoutesMenu(accountType);
  return (
    <div className="flex w-full sticky h-20 bg-woodsmoke-800 justify-between items-center p-4 border-b border-woodsmoke-500">
      <div className="flex flex-row items-center">
        <FaStore fontSize={32} className="text-woodsmoke-50 mr-2" />
        <div className="hidden sm:flex text-xl text-woodsmoke-50">
          LojaVirtual
        </div>
      </div>
      <div className="w-1/2 relative text-woodsmoke-50">
        <HiOutlineSearch
          fontSize={20}
          className="absolute translate-y-1/2 left-2 "
        />
        <input
          type="search"
          placeholder="Pesquise seu produto..."
          className="h-10 w-full bg-woodsmoke-700 p-4 pl-8 rounded-md text-sm focus:outline-none active:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 mr-2 text-woodsmoke-50">
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="inline-flex items-center hover:bg-woodsmoke-700 p-2 rounded-md">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sea-green-900 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
              >
                <span className="sr-only">Hugh Jackson</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-[rgba(_30,_31,_36,_0.90_)] backdrop-filter backdrop-blur-[6px] rounded-md shadow-lg">
              <div className="py-1">
                {routes.map((route, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        to={route.path}
                        className={`block px-4 py-2 text-sm ${
                          active && "bg-woodsmoke-600 text-white"
                        }`}
                      >
                        {route.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <HiOutlineHeart fontSize={32} />
        <HiOutlineShoppingCart fontSize={32} />
      </div>
    </div>
  );
}
