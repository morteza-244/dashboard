import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useEditSettings from "@/hooks/useEditSettings";
import { TSetting } from "@/types";
import {
  settingsSchema,
  TSettingsFormData,
} from "@/validations/cabinsValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SubmitLoading from "../shared/SubmitLoading";

const SettingsForm = ({ setting }: { setting: TSetting }) => {
  const { mutate, isPending } = useEditSettings();
  const form = useForm<TSettingsFormData>({
    resolver: zodResolver(settingsSchema),
  });

  const onSubmit = (data: TSettingsFormData) => {
    mutate(data);
s  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    defaultValue={setting?.maxBookingLength!}
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
                    defaultValue={setting?.minBookingLength!}
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
                    defaultValue={setting?.maxGuestsPerBooking!}
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
                    defaultValue={setting?.breakfastPrice!}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ? <SubmitLoading /> : "ویرایش تنظیمات"}
        </Button>
      </form>
    </Form>
  );
};

export default SettingsForm;
