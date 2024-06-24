import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery: string;
};

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery
    },
  });

  useEffect(() => {
    form.reset({searchQuery});

  }, [form, searchQuery])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-[2rem] bg-yellow-500 grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-[2rem] rounded-2xl "
        action=""
      >
        <div className="bg-white py-[1rem] px-[2rem] flex items-center rounded-xl ">
          <Search className="text-yellow-500" />
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="p-[2rem] shadow-none border-none w-full focus-visible:ring-0 outline-none "
                    {...field}
                    placeholder={placeHolder}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="bg-red-600  uppercase text-white px-[5rem] rounded-xl text-[1.6rem]  cursor-pointer font-semibold hover:bg-red-600/90 transition-all duration-300 py-[3rem] "
        >
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
