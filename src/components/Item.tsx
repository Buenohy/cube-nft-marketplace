import Image from 'next/image';

interface ItemProps {
  image: string;
  nameItem: string;
  rankedNumber: string;
  price: string;
  priceCryptoName: string;
  lastSalePrice: string;
  lastSalePriceCryptoName: string;
}

export default function Item({
  image,
  nameItem,
  rankedNumber,
  price,
  priceCryptoName,
  lastSalePrice,
  lastSalePriceCryptoName,
}: ItemProps) {
  return (
    <div className="group relative max-w-60 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 cursor-pointer">
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt="nft image"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 p-3">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm truncate">{nameItem}</span>
          <span className="bg-neutral-700 px-2 py-0.5 rounded-lg text-[10px] text-gray-300">
            #{rankedNumber}
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-1 items-baseline">
            <span className="font-bold">{price}</span>
            <span className="text-xs text-gray-400 font-medium">
              {priceCryptoName}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-[10px] text-gray-400">Last sale:</span>
            <span className="text-[10px] font-semibold">
              {lastSalePrice} {lastSalePriceCryptoName}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-blue-600 flex items-center justify-between px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <span className="text-white font-bold text-sm">Buy now</span>
        <span className="text-white font-bold text-sm">
          {price} {priceCryptoName}
        </span>
      </div>
    </div>
  );
}
