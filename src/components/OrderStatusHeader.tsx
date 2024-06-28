import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getStatusOrderInfo = () =>{
    return ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
  }

  return (
    <div className="contenedor  ">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <h2 className="text-[3rem] font-bold m-0">Order Status: {getStatusOrderInfo()?.label}</h2>
        <span className="text-[2rem] text-slate-500 m-0 ">Expected by: {getExpectedDelivery()}</span>
      </div>
      <Progress className="mt-[2rem] animate-pulse" value={getStatusOrderInfo()?.progressValue} />
    </div>
  );
};

export default OrderStatusHeader;
