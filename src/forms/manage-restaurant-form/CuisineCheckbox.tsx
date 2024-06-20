import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox = ({ cuisine, field }: Props) => {
  return (
    <FormItem className="flex flex-row items-center space-x-[1rem] space-y-0 mt-[1rem] ">
      <FormControl>
        <Checkbox
          className="bg-white w-[3rem] h-[3rem] rounded-lg "
          checked={field.value.includes(cuisine)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cuisine]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-[1.4rem]">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckbox;
