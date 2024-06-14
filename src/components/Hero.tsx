import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-bg w-full py-[10rem] ">
      <div className="contenedor-second">
        <h1 className="text-center text-white font-bold text-[5rem] ">
          Order{" "}
          <span className="font-secundary text-[6rem] font-thin ">
            Food Online From
          </span>{" "}
          the <br /> Best Restaurants
        </h1>

        <form className="p-[2rem] bg-yellow-500 grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-[2rem] rounded-2xl " action="">
          <div className="bg-white py-[1rem] px-[2rem] flex items-center rounded-xl ">
            <Search className="text-yellow-500" />
            <input
              className="p-[1rem] w-full outline-none "
              type="text"
              placeholder="Search by City or Town"
            />
          </div>
          <input
          value={"Search"}
            type="submit"
            className="bg-red-600  uppercase text-white px-[5rem] rounded-xl text-[1.6rem] cursor-pointer font-semibold hover:bg-red-600/90 transition-all duration-300 py-[2rem] "
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
