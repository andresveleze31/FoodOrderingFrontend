import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-[2rem]">
      <div>
        <h2 className="text-[3rem] font-bold">Details</h2>
        <FormDescription className="text-[1.6rem] ">
          Enter the details about your restaurant
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[1.4rem] ">Name</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-[2rem] ">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.4rem] ">City</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />

            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.4rem] ">Country</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />

            </FormItem>
          )}
        />
      </div>

          
      <div className="grid grid-cols-2 gap-[2rem] ">
        <FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.4rem]">Delivery Price</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />

            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.4rem] ">Estimated Delivery Time (minutes) </FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="30" />
              </FormControl>
              <FormMessage />

            </FormItem>
          )}
        />
      </div>

    </div>
  );
};

export default DetailsSection;
