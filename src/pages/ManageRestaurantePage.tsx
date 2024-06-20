import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantePage = () => {
  const {createRestaurant, isLoading} = useCreateMyRestaurant();
  const {restaurant} = useGetMyRestaurant();
    return (
    <div className="contenedor pb-[5rem]">
      <ManageRestaurantForm restaurant={restaurant} onSave={createRestaurant} isLoading={isLoading} />
    </div>
  );
};

export default ManageRestaurantePage;
