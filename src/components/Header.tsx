import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-start items-center px-1">
        <Link
          to="/"
          className="text-4xl font-bold tracking-tight text-orange-500"
        >
          OrderFood.com
        </Link>
        <div className="md:hidden">
            <MobileNav/>
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
