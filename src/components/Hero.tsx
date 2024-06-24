import SearchBar, { SearchForm } from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

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

        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />

        
      </div>
    </div>
  );
};

export default Hero;
