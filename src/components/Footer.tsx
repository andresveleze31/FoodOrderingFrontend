import { Link } from "react-router-dom";
import logoWhite from "../assets/logowhite.png";
import {
  AppWindow,
  ArrowRightIcon,
  Facebook,
  Github,
  LocateIcon,
  Mail,
  PhoneCall,
  Twitter,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black/90 pt-[10rem] pb-[2rem] ">
      <div className="contenedor grid grid-cols-1 md:grid-cols-4 gap-[2rem]">
        <div className="flex flex-col gap-[2rem] ">
          <img src={logoWhite} className="w-[130px]" alt="Logo" />
          <p className="text-[1.3rem] leading-[3rem] text-white/60">
            Food Ordering is Premium. Best choice for your online needs. Let buy
            and enjoy now
          </p>
          <div className="flex gap-[2rem] ">
            <Link to={"/"}>
              <div className="bg-[#FFFFFF0D] w-10 h-10 flex justify-center items-center rounded-full">
                <Facebook className="text-white/60 w-[1.5rem]" />
              </div>
            </Link>
            <Link to={"/"}>
              <div className="bg-[#FFFFFF0D] w-10 h-10 flex justify-center items-center rounded-full">
                <Github className="text-white/60 w-[1.5rem]" />
              </div>
            </Link>
            <Link to={"/"}>
              <div className="bg-[#FFFFFF0D] w-10 h-10 flex justify-center items-center rounded-full">
                <Twitter className="text-white/60 w-[1.5rem]" />
              </div>
            </Link>
            <Link to={"/"}>
              <div className="bg-[#FFFFFF0D] w-10 h-10 flex justify-center items-center rounded-full">
                <AppWindow className="text-white/60 w-[1.5rem]" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] ">
          <h4 className="uppercase text-white  text-[1.8rem] font-bold">
            Information
          </h4>

          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Carrers
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Investor Relations
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Press Releases
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Shop with Points
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              More Branches
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] ">
          <h4 className="uppercase text-white  text-[1.8rem] font-bold">
            Customer Care
          </h4>

          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Returns
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Shipping
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Gift Cards
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Size Guides
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <ArrowRightIcon className="text-white/60 w-[1.5rem]" />
            <Link className="text-white/60" to={"/"}>
              Money Back
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] ">
          <h4 className="uppercase text-white  text-[1.8rem] font-bold">
            Get in touch
          </h4>

          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <LocateIcon className="text-red-600 " />
            <Link className="text-white/60" to={"/"}>
            123 New Design Str, ABC Building, melbourne, Australia
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <PhoneCall className="text-red-600 w-[2rem]" />
            <Link className="text-white/60" to={"/"}>
            (0044) 8647 1234 587
            </Link>
          </div>
          <div className="flex text-[1.3rem] items-center gap-[1rem] ">
            <Mail className="text-red-600 w-[2rem] " />
            <Link className="text-white/60" to={"/"}>
            foodchow@domain.com
            </Link>
          </div>
          
        </div>
      </div>
      <hr className="bg-white/60 opacity-10 mt-[6rem] " />
      <div className="contenedor mt-[2rem] ">
        <p className="text-[1.3rem] text-center text-white/60 ">© 2024 Andres Velez. All Rights Reserved</p>

      </div>
    </footer>
  );
};

export default Footer;
