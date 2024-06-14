import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import CartItem from "./cart-item";

const Cart = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-2">
            <ShoppingCart />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 w-[90vw] -translate-x-[5vw] p-6">
          <DropdownMenuLabel className="pb-4 text-base font-bold">
            Cart
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <CartItem />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Cart;
