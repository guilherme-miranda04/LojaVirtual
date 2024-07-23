import { MdAccountCircle } from "react-icons/md";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { RiFolderUserFill } from "react-icons/ri";
import { Input } from "../../components/Input/Input";
import { CheckBox } from "../../components/Checkbox/CheckBox";

export function AccountDetails({ firstName }) {
  return (
    <div className="flex-1">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="left-auto right-auto w-3/4 bg-woodsmoke-800 mt-4 p-4">
          <BreadCrumb />
          <div className="flex py-2 px-2 mt-4 border-b-4 border-royal-blue-700 items-center">
            <MdAccountCircle fontSize={56} className="fill-royal-blue-700" />
            <div className="pl-4">
              <h4 className="text-white font-bold text-3xl">
                Olá, {firstName}!
              </h4>
              <p className="text-woodsmoke-50 block">
                Aqui você irá encontrar todas as informações relacionadas a sua
                conta. Podendo alterar dados de pessoa física e endereço...
              </p>
            </div>
          </div>
          <div className="flex mt-6 flex-col">
            <div className="flex border-b-2 border-royal-blue-700">
              <h3 className="flex text-xl items-center p-2">
                <RiFolderUserFill
                  fontSize={32}
                  className="fill-royal-blue-700 mr-2"
                />
                Meus Dados
              </h3>
            </div>

            <form action="#" className="mt-4">
              <div className="flex w-full flex-wrap">
                <Input label="Nome" type="text" placeholder="Nome *" required />
                <Input
                  label="Sobrenome"
                  type="text"
                  placeholder="Sobrenome *"
                  required
                />
                <Input label="CPF" type="cpf" placeholder="CPF *" required />
                <Input label="RG" type="text" placeholder="RG" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Email *"
                  required
                />
                <Input label="Senha" type="password" placeholder="Senha" />
              </div>
              <div className="flex p-2 justify-between items-center mt-4">
                <CheckBox />
                <button className="w-36 h-12 bg-royal-blue-900 text-white font-bold text-center rounded-md hover:bg-royal-blue-800 active:scale-95 transition-transform transform">
                  Atualizar Dados
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl w-96 bg-woodsmoke-800 shadow-xl mt-8">
          <div className="flex flex-col text-center items-center justify-center p-8">
            <div className="text-2xl font-bold text-center text-[#374151]">
              Generator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
