import { MdAccountCircle } from "react-icons/md";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { FaTruckRampBox } from "react-icons/fa6";
import { CardOrders } from "../../components/Cards/CardOrders";

export function AccountOrders({ firstName }) {
  firstName = "Guilherme";
  return (
    <div className="flex-1">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="left-auto right-auto w-3/4 bg-woodsmoke-800 my-8 p-4">
          <BreadCrumb />
          <div className="flex py-2 px-2 mt-4 border-b-4 border-royal-blue-700 items-center">
            <MdAccountCircle fontSize={56} className="fill-royal-blue-700" />
            <div className="pl-4">
              <h4 className="text-white font-bold text-3xl">
                Olá, {firstName}!
              </h4>
              <p className="text-woodsmoke-50 block">
                Aqui você irá encontrar todas as informações relacionadas a
                encomendas da sua conta.
              </p>
            </div>
          </div>
        </div>
        <div className="left-auto right-auto w-3/4 bg-woodsmoke-800 p-4">
          <div className="flex flex-col">
            <div className="flex border-b-2 border-royal-blue-700">
              <h3 className="flex text-xl items-center p-2">
                <FaTruckRampBox
                  fontSize={32}
                  className="fill-royal-blue-700 mr-2"
                />
                Meus Pedidos
              </h3>
            </div>
          </div>
        </div>
        <div className="left-auto right-auto w-3/4 mt-8">
          <CardOrders
            buyData=""
            buyType=""
            numberOrder=""
            priceItem=""
            statusItem=""
          />
        </div>
      </div>
    </div>
  );
}
