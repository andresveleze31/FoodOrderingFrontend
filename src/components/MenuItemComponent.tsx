import { MenuItem } from "@/types";
import { Button } from "./ui/button";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemComponent = ({ menuItem, addToCart }: Props) => {
  return (
    <div className="flex py-[2rem]  justify-between">
      <div className="flex flex-col">
        <h3 className="text-[2.2rem] m-0 ">{menuItem.name}</h3>
        <div className="border border-red-600"></div>
      </div>
      <p className="font-semibold">${(menuItem.price/100).toFixed(2)} </p>
      <Button onClick={addToCart} className="uppercase bg-red-600 py-[2rem]  " >Order now</Button>

    </div>
  );
};

export default MenuItemComponent;
