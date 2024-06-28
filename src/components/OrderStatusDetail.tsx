import { Order } from "@/types";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-[2rem] ">
      <div className="flex flex-col">
        <span className="font-semibold">Delivering to:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="semibold">Your Order</span>
        <ul>
          {order.cartItems.map((item) => (
            <li>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="flex flex-col">
        <span className="font-semibold">Total</span>
        <span>${(order.totalAmount / 100).toFixed(2)} </span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
