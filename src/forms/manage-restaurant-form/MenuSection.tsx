import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-[2rem]">
      <div>
        <h2 className="text-[3rem] font-bold">Menu</h2>
        <FormDescription className="text-[1.6rem] ">
          Create your menu and give each item name and price
        </FormDescription>
      </div>

      <FormField
        control={control}
        name="menuItems"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-[2rem] ">
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button className="py-[2rem] " type="button" onClick={() => append({name: "", price: ""})}>Add Menu Item</Button>
    </div>
  );
};

export default MenuSection;
