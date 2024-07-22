import { PiSealWarningFill } from "react-icons/pi";
import { CardItem } from "../../components/Cards/CardItem";
import { Header } from "./Header";

export function HomePage() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex mt-12 w-full h-full bg-woodsmoke-950 flex-col p-8">
        <div className="flex flex-row item-center text-2xl uppercase py-4">
          <PiSealWarningFill
            fontSize={32}
            className="text-japanese-maple-600"
          />
          <h1 className="text-white ml-2">Produtos Novos e Lançamentos</h1>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-1 gap-4 gap-y-12 item text-white">
          <CardItem
            imageUrl="https://cdn.dooca.store/180/products/gabinete-gamer-nzxt-h9-flow-mid-tower-vidro-temperado-white-atx-sem-fonte-com-4-fans-cm-h91fw-01-1-2_620x620+fill_ffffff.jpg?v=1681321785"
            titleItem="Computador Gamer Ryzen 7 7950X"
            descriptionItem="Computador Gamer Ryzen 7 7950X com Placa de Vídeo Nvidia RTX 4090 12GB"
            startPrice="R$ 4999,99"
            priceItem="R$ 4589,99"
            installmentsPrice="R$ 4789,99"
            hasDelivery
          />
          <CardItem
            imageUrl="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/4/14152-31.jpg"
            titleItem="Cadeira Gamer DT3 GX"
            descriptionItem="Cadeira Gamer DT3 GX Material de Tecído, garantindo mais conforto e durabilidade"
            startPrice="R$ 1.094,11"
            priceItem="R$ 769,99"
            installmentsPrice="R$ 905,87"
          />
          <CardItem
            imageUrl="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/4/14152-31.jpg"
            titleItem="Cadeira Gamer DT3 GX"
            descriptionItem="Cadeira Gamer DT3 GX Material de Tecído, garantindo mais conforto e durabilidade"
            startPrice="R$ 1.094,11"
            priceItem="R$ 769,99"
            installmentsPrice="R$ 905,87"
          />
          <CardItem
            imageUrl="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/4/14152-31.jpg"
            titleItem="Cadeira Gamer DT3 GX"
            descriptionItem="Cadeira Gamer DT3 GX Material de Tecído, garantindo mais conforto e durabilidade"
            startPrice="R$ 1.094,11"
            priceItem="R$ 769,99"
            installmentsPrice="R$ 905,87"
          />
          <CardItem
            imageUrl="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/4/14152-31.jpg"
            titleItem="Cadeira Gamer DT3 GX"
            descriptionItem="Cadeira Gamer DT3 GX Material de Tecído, garantindo mais conforto e durabilidade"
            startPrice="R$ 1.094,11"
            priceItem="R$ 769,99"
            installmentsPrice="R$ 905,87"
          />
          <CardItem
            imageUrl="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/4/14152-31.jpg"
            titleItem="Cadeira Gamer DT3 GX"
            descriptionItem="Cadeira Gamer DT3 GX Material de Tecído, garantindo mais conforto e durabilidade"
            startPrice="R$ 1.094,11"
            priceItem="R$ 769,99"
            installmentsPrice="R$ 905,87"
          />
        </div>
      </div>
    </div>
  );
}
