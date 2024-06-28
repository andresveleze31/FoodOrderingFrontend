import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderSatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="contenedor mb-[5rem] ">
      <div className="space-y-[5rem]">
        {orders.map((order) => (
          <div className="space-y-[5rem] bg-gray-50 p-[2rem] rounded-xl ">
            <OrderStatusHeader order={order} />
            <div className="contenedor grid md:grid-cols-2 gap-[2rem] ">
              <OrderStatusDetail order={order} />
              <AspectRatio ratio={16 / 5}>
                <img
                  src={order.restaurant.imageUrl}
                  className="rounded-md object-cover h-full w-full"
                />
              </AspectRatio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSatusPage;
