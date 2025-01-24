import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

export const BuyProduct = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      {/* PRICE */}
      <div className="mb-6 flex items-center justify-between">
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
      <div>
        <div className="flex w-full justify-between rounded-lg bg-zinc-50 p-3">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 0}
          >
            <Minus color="hsl(26, 100%, 55%)" />
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>
            <Plus color="hsl(26, 100%, 55%)" />
          </button>
        </div>
        <button className="mt-2 flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary-orange py-3 font-bold transition-all hover:opacity-70">
          <ShoppingCart size={18} /> Add to cart
        </button>
      </div>
    </div>
  );
};
