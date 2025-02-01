import { useProduct } from "@/hooks/useProduct";
import { TrashIcon } from "lucide-react";
import ProductImage from "../assets/image-product-1-thumbnail.jpg";
import { Button } from "./ui/button";

const CartItem = () => {
  const { product, setProduct } = useProduct();

  const deleteProductFromCart = () => {
    setProduct((prev) => ({
      ...prev,
      totalPrice: 0,
    }));
  };

  if (product?.totalPrice === 0) {
    return (
      <div className="flex min-h-[100px] min-w-[302px] items-center justify-center">
        <span className="font-medium text-gray-500">Your cart is empty.</span>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="flex items-center space-x-4">
        {/* product image */}
        <div className="h-12 w-12 overflow-hidden rounded">
          <img src={ProductImage} alt="Cart Product" className="w-full" />
        </div>

        <div className="flex-1">
          {/* description and price*/}
          <div className="flex flex-col text-sm">
            <span>Fall Limited Edition Sneakers</span>
            <span>
              $125.00 x {product?.quantity}{" "}
              <span className="font-bold">
                ${product?.totalPrice.toFixed(2)}
              </span>
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          className="h-fit p-2"
          onClick={deleteProductFromCart}
        >
          <TrashIcon size={16} />
        </Button>
      </div>

      <Button className="mt-5 h-14 w-full bg-primary-orange text-base font-bold text-black">
        Checkout
      </Button>
    </div>
  );
};

export default CartItem;
