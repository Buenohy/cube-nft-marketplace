export default function Checkout() {
  return (
    <div className="px-10 py-10">
      <div className="flex gap-5 justify-baseline mb-5">
        <h1>Checkout</h1>
        <span>X</span>
      </div>
      <div className="flex gap-30">
        <div className="flex gap-2">
          <div>
            <div className="bg-red-500 w-10 h-10">A</div>
          </div>
          <div className="flex flex-col">
            <span>Pudgy Penguin #7368</span>
            <span>Pudgy Penguin</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span>4.9475 ETH</span>
          <span>$14K</span>
        </div>
      </div>
      <hr />
      <div className="flex gap-10">
        <div>
          <h2>TOTAL</h2>
        </div>
        <div className="flex flex-col items-end">
          <span>4.9475 ETH</span>
          <span>$14K</span>
        </div>
      </div>
    </div>
  );
}
