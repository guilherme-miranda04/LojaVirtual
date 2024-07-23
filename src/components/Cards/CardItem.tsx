import { FaCartPlus } from "react-icons/fa";
import { Button } from "../Button/Button";

interface CardItemProps {
  imageUrl: string;
  titleItem: string;
  descriptionItem: string;
  startPrice: string;
  priceItem: string;
  installmentsPrice: string;
  hasDelivery?: boolean;
}

export function CardItem({
  imageUrl,
  titleItem,
  descriptionItem,
  startPrice,
  priceItem,
  installmentsPrice,
  hasDelivery,
}: CardItemProps) {
  return (
    <div className="flex flex-col rounded-2xl w-full sm:w-full 2xl:w-96 bg-woodsmoke-800 shadow-xl">
      <figure className="flex justify-center items-center rounded-2xl bg-white">
        <img
          src={imageUrl}
          alt="Card Preview"
          className="rounded-t-2xl w-96 h-60 object-contain"
        />
      </figure>
      <div className="flex flex-col p-6">
        {hasDelivery && (
          <div className="bg-royal-blue-600 w-[168px] text-japanese-maple-50 text-start px-2 font-bold text-xs p-1 rounded-lg mb-2">
            Frete Grátis: Sul e Sudeste
          </div>
        )}
        <div className="text-xl font-bold text-white pb-2">{titleItem}</div>
        <div className="text-base text-woodsmoke-50">{descriptionItem}</div>
        <div className="flex flex-row items-center text-center">
          <s className="text-japanese-maple-400">
            <div className="text-sm font-bold text-japanese-maple-600 pt-2">
              de {startPrice}
            </div>
          </s>
        </div>
        <div className="flex flex-row justify-between items-center text-center">
          <div className="text-xl font-bold text-malachite-600 pt-2">
            {priceItem}
          </div>
          <div className="text-sm text-malachite-600 pt-2 pl-2">à vista</div>
        </div>
        <div className="flex flex-row items-center text-center">
          <div className="text-sm text-texas-600 pt-2">12x de</div>
          <div className="text-sm text-texas-600 pt-2 pl-1">
            {installmentsPrice} sem juros
          </div>
        </div>
        <div className="flex justify-end pt-6">
          <Button label="Adicionar ao Carrinho" icon={<FaCartPlus />} hasIcon />
        </div>
      </div>
    </div>
  );
}
