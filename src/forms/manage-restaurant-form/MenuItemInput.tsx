import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-[2rem] ">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[1.4rem] flex items-center gap-[1rem] ">
              Name <FormMessage />{" "}
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Cheese Pizza"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[1.4rem] flex items-center gap-[1rem] ">
              Price ($) <FormMessage />{" "}
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="8.00"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button type="button" onClick={removeMenuItem} className="bg-red-600 mt-[2.3rem] py-[2rem] ">Remove</Button>
    </div>
  );
};

export default MenuItemInput;
