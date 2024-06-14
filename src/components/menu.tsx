import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Menu = () => {
  const menuItems: string[] = [
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact",
  ];

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-2">
            <MenuIcon color="#68707D" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <ul className="mt-12 space-y-4">
            {menuItems.map((item) => (
              <li key={item} className="text-lg font-bold">
                {item}
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Menu;
