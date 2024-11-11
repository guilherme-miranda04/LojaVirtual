import { Button } from "../Button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { StepByStep } from "../StepByStep/StepByStep";
import { useState } from "react";

interface CardOrdersProps {
  numberOrder: string;
  buyType: string;
  buyData: string;
  priceItem: string;
  statusItem: string;
}

export function CardOrders({
  numberOrder,
  buyType,
  buyData,
  priceItem,
  statusItem,
}: CardOrdersProps) {
  const [currentStep, setCurrentStep] = useState(4);
  return (
    <div className="flex flex-col rounded-md w-full bg-woodsmoke-800 shadow-xl">
      <div className="flex flex-row p-4 items-center border-b-4 border-woodsmoke-600">
        <div className="basis-1/4	max-w-[25%]">
          <h1 className="text-white font-bold">Número do pedido</h1>
          <h1 className="text-white uppercase">#{numberOrder}</h1>
        </div>
        <div className="basis-1/4	max-w-[25%]">
          <h1 className="text-white font-bold">Pagamento</h1>
          <h1 className="text-white uppercase">{buyType}</h1>
        </div>
        <div className="basis-1/4	max-w-[25%]">
          <h1 className="text-white font-bold">Data</h1>
          <h1 className="text-white uppercase">{buyData}</h1>
        </div>
        <div className="basis-1/4	max-w-[25%]">
          <h1 className="text-white font-bold">Valor Total</h1>
          <h1 className="text-white uppercase">R$ {priceItem}</h1>
        </div>
        <div className="basis-1/4 max-w-[25%]">
          <h1 className="text-white font-bold">Status</h1>
          <h1 className="text-sea-green-700 font-bold uppercase">
            {statusItem}
          </h1>
        </div>
      </div>
      <div className="">
        <div className="flex px-4 py-6">
          <StepByStep currentStep={currentStep} />
        </div>
        <div className="flex p-6 justify-between">
          <Button label="Abrir suporte" style="default" />
          <Button
            label="Ver Detalhes"
            style="transparent"
            direction="rtl"
            icon={<MdOutlineKeyboardArrowRight fontSize={18} />}
            hasIcon
          />
        </div>
      </div>
    </div>
  );
}
