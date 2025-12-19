export default function Collection() {
  return (
    <div className="flex gap-10 justify-between">
      <div>
        <h1>Collection Name</h1>
        <div className="flex gap-2">
          <h3>Created By</h3>
          <h3>ETHEREUM</h3>
          <h3>Items</h3>
          <h3>Launched</h3>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col gap-2 items-end">
            <span>Floor Price</span>
            <span>4.58 ETH</span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span>1D Floor %</span>
            <span>-1.3%</span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span>Top Offer</span>
            <span>4.40 WETH</span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span>24H Volume</span>
            <span>162.32 ETH</span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span>Total Volume</span>
            <span>499.6K ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
