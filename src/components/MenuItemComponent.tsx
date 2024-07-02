import { MenuItem } from "@/types";
import { Button } from "./ui/button";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemComponent = ({ menuItem, addToCart }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-[2rem] items-center justify-center py-[2rem]">
      <div className="flex flex-col">
        <h3 className="text-[2.2rem] m-0 ">{menuItem.name}</h3>
      </div>
      <p className="font-semibold">${(menuItem.price/100).toFixed(2)} </p>
      <Button onClick={addToCart} className="uppercase bg-red-600 py-[2rem]  " >Order now</Button>

    </div>
  );
};

export default MenuItemComponent;
