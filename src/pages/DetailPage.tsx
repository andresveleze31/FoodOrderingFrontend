import { useGetRestaurant } from "@/api/FoodRestaurantApi";
import { useCreateCheckoutSession } from "@/api/OrderApi";
import CheckoutButton from "@/components/CheckoutButton";
import Hero from "@/components/Hero";
import MenuItemComponent from "@/components/MenuItemComponent";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
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

  const { createCheckoutSession, isLoading: isCheckoutLoading } =
    useCreateCheckoutSession();

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCarItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCarItems ? JSON.parse(storedCarItems) : [];
  });

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

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => cartItem._id !== item._id
      );

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const onCheckout = async (userFormData: UserFormData) => {
    if (!restaurant) {
      return;
    }

    const checkoutData = {
      cartItems: cartItems.map((cartItem) => ({
        menuItemId: cartItem._id,
        name: cartItem.name,
        quantity: cartItem.quantity.toString(),
      })),
      restaurantId: restaurant._id,
      deliveryDetails: {
        name: userFormData.name,
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string,
      },
    };

    const data = await createCheckoutSession(checkoutData);
    window.location.href = data.url;
  };

  if (isLoading || !restaurant) {
    return "Loading...";
  }

  return (
    <div className="bg-slate-100 ">
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
          <OrderSummary
            restaurant={restaurant}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
          <div className="flex justify-center mt-[5rem] ">
            <CheckoutButton
              disabled={cartItems.length === 0}
              onCheckout={onCheckout}
              isLoading={isCheckoutLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
