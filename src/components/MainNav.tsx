import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="container mx-auto flex justify-between items-center px-4 md:px-270">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-500">
            Trạng thái 
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 bg-gray-300 hidden md:block ml-auto md:mr-10 md:px-20"
        onClick={async () => await loginWithRedirect()}
      >
        Đăng nhập
      </Button>

      )}
    </span>
  );
};

export default MainNav;
