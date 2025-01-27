import { useProduct } from "@/hooks/useProduct";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export const BuyProduct = () => {
  const { product, setProduct } = useProduct();

  const decreaseQtd = () => {
    setProduct((prev) => ({
      ...prev,
      quantity: prev.quantity - 1,
    }));
  };

  const increaseQtd = () => {
    setProduct((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  return (
    <div>
      {/* PRICE */}
      <div className="mb-6 flex items-center justify-between gap-y-2 custom:flex-col custom:items-start">
        <div className="flex items-center">
          <span className="mr-3 inline-block text-3xl font-bold">$125.00</span>
          <span className="inline-block rounded-lg bg-orange-100 px-2 py-[2px] text-sm font-medium text-primary-orange">
            50%
          </span>
        </div>
        {/* DISCOUNT */}
        <div className="font-bold text-gray-500 line-through">$250.00</div>
      </div>
      {/* QUANTITY */}
      <div className="gap-x-4 custom:flex">
        <div className="flex w-full justify-between rounded-lg bg-zinc-50 p-3 custom:max-w-[150px]">
          <button disabled={product?.quantity === 0} onClick={decreaseQtd}>
            <Minus color="hsl(26, 100%, 55%)" />
          </button>
          <span className="text-lg font-bold">{product.quantity}</span>
          <button onClick={increaseQtd}>
            <Plus color="hsl(26, 100%, 55%)" />
          </button>
        </div>
        <button className="mt-2 flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary-orange py-3 font-bold transition-all hover:opacity-70 custom:mt-0">
          <ShoppingCart size={18} /> Add to cart
        </button>
      </div>
    </div>
  );
};
