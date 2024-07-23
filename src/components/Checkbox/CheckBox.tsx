import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

export function CheckBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor="link"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-woodsmoke-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-royal-blue-500 before:opacity-0 before:transition-opacity checked:border-woodsmoke-600 checked:bg-royal-blue-700 checked:before:bg-royal-blue-900 focus:outline-royal-blue-700 hover:before:opacity-10"
          id="link"
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="mt-px font-light text-woodsmoke-200 cursor-pointer select-none"
        htmlFor="link"
      >
        <p className="flex font-sans text-base antialiased font-medium leading-relaxed text-woodsmoke-50">
          Li e concordo com os
          <button
            className="block font-sans text-base antialiased font-medium leading-relaxed text-royal-blue-500 transition-colors hover:text-royal-blue-700"
            onClick={() => setIsOpen(true)}
          >
            &nbsp;termos e condições
          </button>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed bg-[rgba(_0,_0,_0,_0.55_)] inset-0 flex w-screen items-center justify-center p-4 sm:p-0">
              <DialogPanel className="max-w-5xl max-h-[900px] sm:max-h-full xl:max-h-[700px] 2xl:max-h-[900px] space-y-4 rounded-md bg-woodsmoke-800 p-12 overflow-auto">
                <DialogTitle className="font-bold text-white">
                  <h2 className="text-xl -mt-4">Política Privacidade</h2>
                </DialogTitle>
                <Description className="text-woodsmoke-50">
                  A sua privacidade é importante para nós. É política do
                  LojaVirtual respeitar a sua privacidade em relação a qualquer
                  informação sua que possamos coletar no site LojaVirtual, e
                  outros sites que possuímos e operamos.
                </Description>
                <p className="text-woodsmoke-50">
                  Solicitamos informações pessoais apenas quando realmente
                  precisamos delas para lhe fornecer um serviço. Fazemo-lo por
                  meios justos e legais, com o seu conhecimento e consentimento.
                  Também informamos por que estamos coletando e como será usado.
                </p>
                <p className="text-woodsmoke-50">
                  Apenas retemos as informações coletadas pelo tempo necessário
                  para fornecer o serviço solicitado. Quando armazenamos dados,
                  protegemos dentro de meios comercialmente aceitáveis ​​para
                  evitar perdas e roubos, bem como acesso, divulgação, cópia,
                  uso ou modificação não autorizados.
                </p>
                <p className="text-woodsmoke-50">
                  Não compartilhamos informações de identificação pessoal
                  publicamente ou com terceiros, exceto quando exigido por lei.
                </p>
                <p className="text-woodsmoke-50">
                  O nosso site pode ter links para sites externos que não são
                  operados por nós. Esteja ciente de que não temos controle
                  sobre o conteúdo e práticas desses sites e não podemos aceitar
                  responsabilidade por suas respectivas políticas de
                  privacidade.
                </p>
                <p className="text-woodsmoke-50">
                  Você é livre para recusar a nossa solicitação de informações
                  pessoais, entendendo que talvez não possamos fornecer alguns
                  dos serviços desejados.
                </p>
                <p className="text-woodsmoke-50">
                  O uso continuado de nosso site será considerado como aceitação
                  de nossas práticas em torno de privacidade e informações
                  pessoais. Se você tiver alguma dúvida sobre como lidamos com
                  dados do usuário e informações pessoais, entre em contacto
                  conosco.
                </p>
                <ul className="ml-8 list-disc list-inside text-woodsmoke-50">
                  <li>
                    O serviço Google AdSense que usamos para veicular
                    publicidade usa um cookie DoubleClick para veicular anúncios
                    mais relevantes em toda a Web e limitar o número de vezes
                    que um determinado anúncio é exibido para você.
                  </li>
                  <li>
                    Para mais informações sobre o Google AdSense, consulte as
                    FAQs oficiais sobre privacidade do Google AdSense.
                  </li>
                  <li>
                    Utilizamos anúncios para compensar os custos de
                    funcionamento deste site e fornecer financiamento para
                    futuros desenvolvimentos. Os cookies de publicidade
                    comportamental usados ​​por este site foram projetados para
                    garantir que você forneça os anúncios mais relevantes sempre
                    que possível, rastreando anonimamente seus interesses e
                    apresentando coisas semelhantes que possam ser do seu
                    interesse.
                  </li>
                  <li>
                    Vários parceiros anunciam em nosso nome e os cookies de
                    rastreamento de afiliados simplesmente nos permitem ver se
                    nossos clientes acessaram o site através de um dos sites de
                    nossos parceiros, para que possamos creditá-los
                    adequadamente e, quando aplicável, permitir que nossos
                    parceiros afiliados ofereçam qualquer promoção que pode
                    fornecê-lo para fazer uma compra.
                  </li>
                </ul>
                <p className="text-lg text-woodsmoke-50">
                  Compromisso do Usuário
                </p>
                <p className="text-woodsmoke-50">
                  O usuário se compromete a fazer uso adequado dos conteúdos e
                  da informação que o LojaVirtual oferece no site e com caráter
                  enunciativo, mas não limitativo:
                </p>
                <ul className="ml-8 list-disc list-inside text-woodsmoke-50">
                  <li>
                    A) Não se envolver em atividades que sejam ilegais ou
                    contrárias à boa fé a à ordem pública;
                  </li>
                  <li>
                    B) Não difundir propaganda ou conteúdo de natureza racista,
                    xenofóbica, bbebbet ou azar, qualquer tipo de pornografia
                    ilegal, de apologia ao terrorismo ou contra os direitos
                    humanos;
                  </li>
                  <li>
                    C) Não causar danos aos sistemas físicos (hardwares) e
                    lógicos (softwares) do LojaVirtual, de seus fornecedores ou
                    terceiros, para introduzir ou disseminar vírus informáticos
                    ou quaisquer outros sistemas de hardware ou software que
                    sejam capazes de causar danos anteriormente mencionados.
                  </li>
                </ul>
                <p className="text-lg text-woodsmoke-50">Mais informações</p>
                <p className="text-woodsmoke-50">
                  Esperemos que esteja esclarecido e, como mencionado
                  anteriormente, se houver algo que você não tem certeza se
                  precisa ou não, geralmente é mais seguro deixar os cookies
                  ativados, caso interaja com um dos recursos que você usa em
                  nosso site.
                </p>
                <div className="flex gap-4 justify-end">
                  <button
                    className="px-4 py-2 bg-royal-blue-600 text-white rounded hover:bg-royal-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Fechar
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </p>
      </label>
    </div>
  );
}
