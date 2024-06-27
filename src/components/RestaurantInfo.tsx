import { Restaurant } from "@/types";
import { Dot, Star } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <div className="mt-[2rem] ">
      <div className="flex justify-between">
        <h1 className="m-0 text-[3.4rem] font-bold ">
          {restaurant.restaurantName}{" "}
        </h1>

        <div className="text-[1.3rem] items-center font-semibold h-fit py-[1rem] px-[2rem] flex gap-[1rem] border-red-600 border-[.2rem] ">
          <Star className="w-[1.2rem]  " />
          Rate 4.2
        </div>
      </div>
      <p className="text-gray-400 text-[1.6rem] ">
        {restaurant.country}, {restaurant.city}{" "}
      </p>
      <div className="flex mt-[1rem]">
      {restaurant.cuisines.map((item, index) => (
        <div className="flex">
          <p className="text-[1.5rem] hover:text-red-600 transition-all duration-300   ">{item}</p>
          {index < restaurant.cuisines.length - 1 && <Dot />}
        </div>
      ))}

      </div>

      <div className="border uppercase flex justify-center text-red-600 font-semibold py-[1rem] mt-[2rem] ">
        Restaurant {restaurant.restaurantName} Menu
      </div>

      
    </div>
  );
};

export default RestaurantInfo;
