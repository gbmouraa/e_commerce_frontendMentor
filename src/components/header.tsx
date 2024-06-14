import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.jpg";
import Menu from "./menu";
import Cart from "./cart";

const Header = () => {
  return (
    <header className="flex items-center space-x-3 px-4 py-5">
      <Menu />

      <div className="flex-1">
        <img src={Logo} alt="Logo" />
      </div>

      <Cart />

      <div className="w-fit cursor-pointer rounded-full border-2 border-transparent hover:border-primary-orange">
        <img src={Avatar} alt="Avatar" className="block h-7 w-7 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
