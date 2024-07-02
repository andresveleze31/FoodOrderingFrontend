import SearchBar, { SearchForm } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import IconOne from "../assets/fact-icon1.png";
import IconTwo from "../assets/fact-icon2.png";
import IconThree from "../assets/fact-icon3.png";
import IconFour from "../assets/fact-icon4.png";
import CloudsImage from "../assets/clouds.png";
import Moto from "../assets/moto.png";

type Props = {
  home?: boolean;
};

const Hero = ({ home }: Props) => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="hero-bg  w-full pt-[10rem] ">
      <div className="contenedor-second">
        <h1 className="text-center text-white font-bold text-[5rem] ">
          Order{" "}
          <span className="font-secundary text-[6rem] font-thin ">
            Food Online From
          </span>{" "}
          the <br /> Best Restaurants
        </h1>

        <SearchBar
          placeHolder="Search by City or Town (London, Manchester) "
          onSubmit={handleSearchSubmit}
        />

        {home && (
          <div className="mt-[4rem] ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
              <div className="flex items-center gap-[2rem] ">
                <div className="flex items-center bg-white px-[2rem] py-[2.5rem] rounded-full justify-center">
                  <img src={IconOne} alt="Icon" />
                </div>
                <div>
                  <h3 className="font-bold m-0 text-white">137</h3>
                  <p className="text-white/60 text-[1.5rem] font-bold">
                    Restaurants
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[2rem] ">
                <div className="flex items-center bg-white px-[2.5rem] py-[2rem] rounded-full justify-center">
                  <img src={IconTwo} alt="Icon" />
                </div>
                <div>
                  <h3 className="font-bold m-0 text-white">158</h3>
                  <p className="text-white/60 text-[1.5rem] font-bold">
                    People Served
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem] ">
                <div className="flex items-center bg-white px-[2.3rem] py-[2rem] rounded-full justify-center">
                  <img src={IconThree} alt="Icon" />
                </div>
                <div>
                  <h3 className="font-bold m-0 text-white">659k</h3>
                  <p className="text-white/60 text-[1.5rem] font-bold">
                    Happy Service
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem] ">
                <div className="flex items-center bg-white px-[2rem] py-[2rem] rounded-full justify-center">
                  <img src={IconFour} alt="Icon" />
                </div>
                <div>
                  <h3 className="font-bold m-0 text-white">245</h3>
                  <p className="text-white/60 text-[1.5rem] font-bold">
                    Regular Users
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {home && (
        <div className="mt-[5rem] relative">
          <img src={CloudsImage} alt="" />
          <div className="bg-white w-full py-[5rem] "></div>

          <div className="absolute bottom-0">
            <img className="md:w-full md:h-full w-[20rem] h-[20rem] " src={Moto} alt="Moto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
