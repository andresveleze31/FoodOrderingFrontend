import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MobileNav = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-red-600" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-red-600" />
              {user?.email}
            </span>
          ) : (
            <span className="text-[1.4rem] uppercase pb-[1rem] ">
              Welcome to FoodChow
            </span>
          )}
        </SheetTitle>
        <SheetDescription className="flex flex-col gap-[5rem] ">
          <Link
            className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
            to={"/search/London"}
          >
            Restaurants
          </Link>
          <Link
            className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
            to={"/about-us"}
          >
            About Us
          </Link>
          <Link
            className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
            to={"/contact-us"}
          >
            Contact Us
          </Link>
          {isAuthenticated && (
            <Link
              className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
              to={"/user-profile"}
            >
              User Profile
            </Link>
          )}

          {isAuthenticated && (
            <Link
              className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
              to={"/order-status"}
            >
              Order Status
            </Link>
          )}

          {isAuthenticated && (
            <Link
              className="font-bold hover:text-red-600 text-[1.6rem] transition-all duration-300"
              to={"/manage-restaurant"}
            >
              Manage Restaurant
            </Link>
          )}

          {isAuthenticated ? (
            <Button
              onClick={() => logout()}
              className="flex flex-1 p-4 text-[1.6rem] font-bold bg-red-600"
            >
              Log Out
            </Button>
          ) : (
            <button
              className="bg-red-600 text-center  uppercase text-white px-[5rem] rounded-xl text-[1.3rem] font-semibold hover:bg-red-600/90 transition-all duration-300 py-[1.2rem] "
              onClick={async () => await loginWithRedirect()}
            >
              Sign In
            </button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
