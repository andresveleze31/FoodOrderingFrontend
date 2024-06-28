import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <header className="py-[4rem] contenedor flex justify-between items-center">
      <img src={logo} alt="Logo" />

      <div className="hidden md:grid grid-cols-4 gap-[2rem] ">
        <div className="flex px-[2rem] border-r flex-col">
          <span className="uppercase text-red-500 text-[1.2rem]">
            FOOD ORDERING
          </span>
          <Link
            to={"/"}
            className="uppercase text-[1.8rem] font-semibold hover:text-yellow-400 transition-all duration-300 "
          >
            Home Page
          </Link>
        </div>
        <div className="flex px-[2rem] border-r flex-col">
          <span className="uppercase text-red-500 text-[1.2rem]">
            REAL FOOD
          </span>
          <Link
            to={"/restaurants"}
            className="uppercase text-[1.8rem] font-semibold hover:text-yellow-400 transition-all duration-300 "
          >
            Restaurants
          </Link>
        </div>
        <div className="flex px-[2rem]  border-r flex-col">
          <span className="uppercase text-red-500 text-[1.2rem]">
            FOOD CHOW
          </span>
          <Link
            to={"/about-us"}
            className="uppercase text-[1.8rem] font-semibold hover:text-yellow-400 transition-all duration-300 "
          >
            About Us
          </Link>
        </div>
        <div className="flex px-[2rem] flex-col">
          <span className="uppercase text-red-500 text-[1.2rem]">
            INFORMATION
          </span>
          <Link
            to={"/contact-us"}
            className="uppercase text-[1.8rem] font-semibold hover:text-yellow-400 transition-all duration-300 "
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-[2rem]  ">
        {isAuthenticated ? (
          
          <UsernameMenu />
          
        ) : (
          <button
            className="bg-red-600  uppercase text-white px-[5rem] rounded-xl text-[1.3rem] font-semibold hover:bg-red-600/90 transition-all duration-300 py-[1.2rem] "
            onClick={async () => await loginWithRedirect()}
          >
            Sign In
          </button>
        )}
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
