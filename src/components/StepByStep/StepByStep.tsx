import { FaShippingFast, FaTruckLoading } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { MdConveyorBelt } from "react-icons/md";
import { TbShoppingCartCopy } from "react-icons/tb";

interface StepByStepProps {
  currentStep: number;
  typeStep?: "default" | "basic";
}

const steps = [
  {
    name: "Pedido Realizado",
    icon: TbShoppingCartCopy,
    updatedData: "22/07/2024 13:33",
  },
  {
    name: "Enviado à Transportadora",
    icon: MdConveyorBelt,
    updatedData: "22/07/2024 15:22",
  },
  {
    name: "Recebido pela Transportadora",
    icon: FaTruckLoading,
    updatedData: "22/07/2024 15:49",
  },
  {
    name: "Em Trânsito",
    icon: FaShippingFast,
    updatedData: "23/07/2024 04:19",
  },
  {
    name: "Pedido Entregue",
    icon: HiCheckCircle,
    updatedData: "26/07/2024 11:30",
  },
];

export function StepByStep({
  currentStep,
  typeStep = "default",
}: StepByStepProps) {
  const typeStepClasses = {
    default: 0,
    basic: 1,
  };

  const totalSteps = steps.length;
  const stepWidth = 100;
  const adjustment = 10;

  const progressWidthPercent =
    ((currentStep + typeStepClasses[typeStep]) / totalSteps) * stepWidth;

  const progressWidth =
    typeStep === "basic"
      ? `calc(${progressWidthPercent}% - ${adjustment}%)`
      : currentStep === totalSteps
      ? `${progressWidthPercent}%`
      : `calc(${progressWidthPercent}% - ${adjustment}%)`;

  /***
   * ? `${progressWidthPercent}%`
   */

  return (
    <div className="w-full">
      <h2 className="sr-only">Etapas</h2>
      <div className="relative mt-4 h-1 w-full rounded-lg bg-woodsmoke-600">
        <div
          className="absolute top-0 h-1 rounded-lg bg-royal-blue-600 transition-all duration-300 ease-in-out"
          style={{
            width: progressWidth,
            maxWidth: "100%",
          }}
          aria-label={`Progresso atual: ${
            currentStep + 1
          } de ${totalSteps} etapas`}
        ></div>
      </div>
      <ol className="mt-4 grid grid-cols-5 text-sm font-medium text-woodsmoke-500">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={index}
              className={`relative flex flex-col items-center  ${
                index + 1 <= currentStep ? "text-royal-blue-600" : ""
              }`}
              aria-current={index + 1 === currentStep ? "step" : undefined}
              aria-label={step.name}
            >
              <span
                className={`absolute -top-[2.40rem] flex items-center justify-center rounded-full p-2 ${
                  index + 1 <= currentStep
                    ? "bg-royal-blue-600"
                    : "bg-woodsmoke-600"
                } text-white`}
                aria-hidden="true"
              >
                <Icon className="h-[25px] w-[25px]" />
              </span>
              <span className="hidden sm:block mt-2">{step.name}</span>
              <span className="text-woodsmoke-50 text-xs font-normal">
                {step.updatedData}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
