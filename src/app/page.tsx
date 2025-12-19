import Checkout from '@/components/Checkout';
import Collection from '@/components/Collection';
import Header from '@/components/Header';
import Item from '@/components/Item';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-5 bg-white dark:bg-black sm:items-start">
        <div>
          <Header />
          <Collection />
          <div className="grid grid-cols-4 grid-rows-1 gap-3">
            <Item
              image="/../src/images/nft.avif"
              nameItem="Name Item"
              rankedNumber="#7,006"
              price="4.98"
              priceCryptoName="ETH"
              lastSalePrice="7.10"
              lastSalePriceCryptoName="WETH"
            />
            <Item
              image="/../src/images/nft.avif"
              nameItem="Name Item"
              rankedNumber="#7,006"
              price="4.98"
              priceCryptoName="ETH"
              lastSalePrice="7.10"
              lastSalePriceCryptoName="WETH"
            />
          </div>
          <Checkout />
        </div>
      </main>
    </div>
  );
}
