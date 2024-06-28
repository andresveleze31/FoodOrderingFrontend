import { Order, OrderStatus } from "@/types";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/RestaurantApi";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();

  const [status, setStatus] = useState<OrderStatus>(order.status);


  useEffect(() => {
    setStatus(order.status);
  },[order.status] )

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <div className="bg-white p-[2rem] rounded-xl shadow-md ">
      <div className="grid md:grid-cols-4 gap-[2rem]  justify-between mb-3 ">
        <div className="font-semibold">
          Customer Name:{" "}
          <span className="font-normal">{order.deliveryDetails.name}</span>
        </div>
        <div className="font-semibold">
          Delivery Address:{" "}
          <span className="font-normal">
            {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
          </span>
        </div>
        <div className="font-semibold">
          Time: <span className="font-normal">{getTime()}</span>
        </div>
        <div className="font-semibold">
          Total:{" "}
          <span className="font-normal">
            ${(order.totalAmount / 100).toFixed(2)}
          </span>
        </div>
      </div>
      <hr />

      <div className="flex flex-col my-[2rem] gap-[2rem] ">
        {order.cartItems.map((cartItem) => (
          <span className="flex gap-[1rem] items-center">
            <Badge className="text-[1.6rem] " variant="outline">
              {cartItem.quantity}
            </Badge>
            {cartItem.name}
          </span>
        ))}
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label className="text-[1.6rem] " htmlFor="status">
          What is the status of this order?
        </Label>

        <Select
          value={status}
          disabled={isLoading}
          onValueChange={(value) => handleStatusChange(value as OrderStatus)}
        >
          <SelectTrigger className="text-[1.6rem] py-[2rem] " id="status">
            <SelectValue className="text-[1.6rem] " placeholder="Status" />
          </SelectTrigger>
          <SelectContent position="popper">
            {ORDER_STATUS.map((status) => (
              <SelectItem className="text-[1.6rem] " value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default OrderItemCard;
