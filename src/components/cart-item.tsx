import { TrashIcon } from "lucide-react";
import ProductImage from "../assets/image-product-1-thumbnail.jpg";
import { Button } from "./ui/button";

const CartItem = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center space-x-4">
        {/* product image */}
        <div className="h-12 w-12 overflow-hidden rounded">
          <img src={ProductImage} alt="Cart Product" className="w-full" />
        </div>

        <div className="flex-1">
          {/* description and price*/}
          <div className="flex flex-col">
            <span>Fall Limited Edition Sneakers</span>
            <span>
              $125.00 x 3 <span className="font-bold">$375.00</span>
            </span>
          </div>
        </div>
        <Button variant="ghost" className="h-fit p-2">
          <TrashIcon size={16} />
        </Button>
      </div>

      <Button className="bg-primary-orange mt-5 h-14 w-full text-base font-bold text-black">
        Checkout
      </Button>
    </div>
  );
};

export default CartItem;
