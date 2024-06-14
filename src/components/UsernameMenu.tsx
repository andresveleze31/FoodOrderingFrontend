import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-red-600 gap-2">
        <CircleUserRound className="text-red-600" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-[1rem] ">
        <DropdownMenuItem>
          <Link
            className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
            to={"/user-profile"}
          >
            User Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
            <Button onClick={() => logout()} className="flex flex-1 p-4 text-[1.6rem] font-bold bg-red-600">
                Log Out
            </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
