import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { Badge } from "./ui/badge";
import { Trash } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};
const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getNetCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    return (totalInPence / 100).toFixed(2);
  };

  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <div className=" ">
      <h3 className="text-[2.5rem] font-semibold text-center pt-[2rem] px-[1rem] ">
        Your Order
      </h3>
      {cartItems.map((item) => (
        <div className="px-[2rem] py-[2rem] ">
          <div className="flex justify-between items-center pb-[2rem] ">
            <span className="flex items-center gap-[2rem] ">
              <Badge className="text-[1rem] " variant={"outline"}>{item.quantity}</Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-[1rem] ">
                <Trash className="cursor-pointer" color="red" size={15} onClick={() => removeFromCart(item)} />              ${((item.price * item.quantity) / 100).toFixed(2)}
            </span>
          </div>
          <hr />
        </div>
      ))}
      <hr />
      <div className="bg-black/80 pt-[2rem] pb-[6rem] px-[3rem] flex flex-col gap-[1.6rem]  ">
        <div className="flex justify-between">
          <p className="text-white text-[1.5rem] ">Delivery Price</p>
          <p className="text-white text-[1.5rem] ">
            ${(restaurant.deliveryPrice / 100).toFixed(2)}{" "}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-white text-[1.5rem] ">Subtotal</p>
          <p className="text-white text-[1.5rem]">${getNetCost()}</p>
        </div>
      </div>

      <div className="bg-red-600 py-[4rem] px-[2rem] mx-[4rem] my-[-4rem] ">
        <div className="flex justify-between">
          <p className="text-white text-[2rem] ">Total</p>
          <p className="text-white text-[2rem]">${getTotalCost()}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
