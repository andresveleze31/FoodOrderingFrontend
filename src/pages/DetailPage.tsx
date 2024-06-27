import { useGetRestaurant } from "@/api/FoodRestaurantApi";
import Hero from "@/components/Hero";
import MenuItemComponent from "@/components/MenuItemComponent";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MenuItem } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const { restaurantId } = useParams();

  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (menuItem: MenuItem) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name, // Corregido para usar el nombre del menú
            price: menuItem.price,
            quantity: 1, // Añadir la cantidad inicial
          },
        ];
      }

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => cartItem._id !== item._id
      );

      return updatedCartItems;
    });
  };

  if (isLoading || !restaurant) {
    return "Loading...";
  }

  return (
    <div className="bg-slate-100">
      <Hero />

      <div className="contenedor rounded-xl bg-white p-[5rem] mt-[5rem]   grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-[4rem] ">
        <div>
          <AspectRatio ratio={16 / 5}>
            <img
              src={restaurant.imageUrl}
              className="rounded-md object-cover h-full w-full"
              alt=""
            />
          </AspectRatio>

          <RestaurantInfo restaurant={restaurant} />
          {restaurant.menuItems.map((menuItem) => (
            <div>
              <MenuItemComponent
                menuItem={menuItem}
                addToCart={() => addToCart(menuItem)}
              />
              <hr />
            </div>
          ))}
        </div>

        <div className="border h-fit ">
          <OrderSummary restaurant={restaurant} cartItems={cartItems} removeFromCart={removeFromCart}  />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
