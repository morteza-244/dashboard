import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  settingsSchema,
  TSettingsFormData,
} from "@/validations/cabinsValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SettingsForm = () => {
  const form = useForm<TSettingsFormData>({
    resolver: zodResolver(settingsSchema),
  });
  const onSubmit = (data: TSettingsFormData) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="maxBookingLength"
            render={() => (
              <FormItem>
                <FormLabel>حداکثر شبهای رزرو شده</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("maxBookingLength", {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minBookingLength"
            render={() => (
              <FormItem>
                <FormLabel>حداقل شبهای رزرو شده</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("minBookingLength", {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxGuestsPerBooking"
            render={() => (
              <FormItem>
                <FormLabel>حداکثر مهمان های رزرو شده</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("maxGuestsPerBooking", {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="breakfastPrice"
            render={() => (
              <FormItem>
                <FormLabel>هزینه صبحانه</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("breakfastPrice", {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">ثبت تنظیمات</Button>
      </form>
    </Form>
  );
};

export default SettingsForm;
