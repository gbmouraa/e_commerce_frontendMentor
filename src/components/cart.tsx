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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-2">
            <ShoppingCart width={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 max-w-[350px] -translate-x-[5vw] p-6">
          <DropdownMenuLabel className="pb-4 text-base font-bold">
            Cart
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <CartItem />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Cart;
