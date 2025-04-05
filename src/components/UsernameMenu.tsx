import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2 bg-gray-300">
            <CircleUserRound className="text-orange-500"/>
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to="/user-profile"
                className="font-bold hover:text-orange-500"
                >
                    Hồ sơ người dùng
                </Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
                <Button
                onClick={() => logout()}
                 className="flex flex-1 font-1 font-bold bg-orange-500">
                    Đăng xuất
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu> 
    )
}

export default UsernameMenu;