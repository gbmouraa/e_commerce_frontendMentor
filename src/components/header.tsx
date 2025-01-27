import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.jpg";
import Menu from "./menu";
import Cart from "./cart";

const Header = () => {
  return (
    <div className="m-auto px-4 py-5 custom:max-w-[1100px] custom:py-0 xl:px-0">
      <header className="flex items-center custom:items-start custom:pt-10">
        {/* DROPDOWN MENU */}
        <div className="mr-3 block custom:hidden">
          <Menu />
        </div>
        <div className="flex-1 custom:mr-10 custom:flex-none">
          <img src={Logo} alt="Logo" />
        </div>
        {/* MENU */}
        <ul className="hidden flex-1 items-center gap-x-6 custom:flex">
          <li className="group cursor-pointer text-zinc-500 transition-all hover:text-zinc-700">
            <div className="flex h-[70px] flex-col justify-between">
              <span className="inline-block">Collections</span>
              <div className="h-1 w-0 bg-primary-orange transition-all duration-300 group-hover:w-full" />
            </div>
          </li>
          <li className="group cursor-pointer text-zinc-500 transition-all hover:text-zinc-700">
            <div className="flex h-[70px] flex-col justify-between">
              <span className="inline-block">Men</span>
              <div className="h-1 w-0 bg-primary-orange transition-all duration-300 group-hover:w-full" />
            </div>
          </li>
          <li className="group cursor-pointer text-zinc-500 transition-all hover:text-zinc-700">
            <div className="flex h-[70px] flex-col justify-between">
              <span className="inline-block">Women</span>
              <div className="h-1 w-0 bg-primary-orange transition-all duration-300 group-hover:w-full" />
            </div>
          </li>
          <li className="group cursor-pointer text-zinc-500 transition-all hover:text-zinc-700">
            <div className="flex h-[70px] flex-col justify-between">
              <span className="inline-block">About</span>
              <div className="h-1 w-0 bg-primary-orange transition-all duration-300 group-hover:w-full" />
            </div>
          </li>
          <li className="group cursor-pointer text-zinc-500 transition-all hover:text-zinc-700">
            <div className="flex h-[70px] flex-col justify-between">
              <span className="inline-block">Contact</span>
              <div className="h-1 w-0 bg-primary-orange transition-all duration-300 group-hover:w-full" />
            </div>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Cart />
          <div className="w-fit cursor-pointer rounded-full border-2 hover:border-primary-orange">
            <img
              src={Avatar}
              alt="Avatar"
              className="block h-7 w-7 rounded-full"
            />
          </div>
        </div>
      </header>
      <div className="m-auto hidden w-full max-w-[1100px] border border-gray-200 custom:block" />
    </div>
  );
};

export default Header;
