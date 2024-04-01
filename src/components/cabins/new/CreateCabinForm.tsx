import SubmitLoading from "@/components/shared/SubmitLoading";
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
import { Textarea } from "@/components/ui/textarea";
import { createCabin } from "@/services/apiCabins";
import { TCabinFormData, cabinSchema } from "@/validations/cabinsValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateCabinForm = () => {
  const queryClient = useQueryClient();
  const form = useForm<TCabinFormData>({
    resolver: zodResolver(cabinSchema),
    defaultValues: {
      name: "",
      description: "",
      discount: 0,
      maxCapacity: 0,
      regularPrice: 0,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Your cabin has been created successfully");
      form.reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: TCabinFormData) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام اقامتگاه</FormLabel>
                <FormControl>
                  <Input placeholder="اتاق 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxCapacity"
            render={() => (
              <FormItem>
                <FormLabel>ظرفیت اتاق</FormLabel>
                <FormControl>
                  <Input
                    placeholder="یک نفر"
                    {...form.register("maxCapacity", { valueAsNumber: true })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="regularPrice"
            render={() => (
              <FormItem>
                <FormLabel>مبلغ اجاره</FormLabel>
                <FormControl>
                  <Input
                    placeholder="حداقل 100,000 تومان"
                    {...form.register("regularPrice", { valueAsNumber: true })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discount"
            render={() => (
              <FormItem>
                <FormLabel>مبلغ تخفیف</FormLabel>
                <FormControl>
                  <Input
                    placeholder="حداقل 100,000 تومان"
                    {...form.register("discount", { valueAsNumber: true })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>توضیحات اقامتگاه</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="توضیحات..."
                  className="resize-none"
                  rows={7}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? <SubmitLoading /> : "ثبت اقامتگاه"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateCabinForm;
