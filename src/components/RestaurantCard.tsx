import { Restaurant } from "@/types"
import { Link } from "react-router-dom";
import { Banknote, Clock, Dot } from "lucide-react";

type Props = {
    restaurant: Restaurant;
}
const RestaurantCard = ({restaurant}: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="flex flex-col  group "
    >
        <img
          src={restaurant.imageUrl}
          className="rounded-md h-[20rem] w-full object-cover"
        />

      <div className="bg-gray-100 p-[2rem] rounded-xl ">
        <h3 className="font-semibold text-[3rem] tracking-tight mb-[1rem] group-hover:underline ">
          {restaurant.restaurantName}
        </h3>

        <div id="card-content" className="grid  gap-[1rem] ">
          <div className="flex flex-row flex-wrap">
            {restaurant.cuisines.map((item, index) => (
              <span key={index} className="flex">
                <span>{item}</span>
                {index < restaurant.cuisines.length - 1 && <Dot />}
              </span>
            ))}
          </div>
          <div className="flex gap-[1rem] flex-col ">
            <div className="flex items-center gap-[1rem] text-green-600 ">
              <Clock className="text-green-600" />
              {restaurant.estimatedDeliveryTime} mins
            </div>
            <div className="flex items-center gap-[1rem]">
              <Banknote />
              Delivery From ${(restaurant.deliveryPrice / 100).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard
