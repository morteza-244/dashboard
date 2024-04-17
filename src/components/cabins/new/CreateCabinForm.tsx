import { SubmitButton, FileUploader } from "@/components/shared";
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
import useCreateCabin from "@/hooks/useCreateCabin";
import { TCabinFormData, cabinSchema } from "@/validations/cabinsValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateCabinForm = () => {
  const [fileUrl, setFileUrl] = useState("");
  const form = useForm<TCabinFormData>({
    resolver: zodResolver(cabinSchema),
    defaultValues: {
      name: "",
      description: "",
      image: [],
      discount: 0,
      maxCapacity: 0,
      regularPrice: 0,
    },
  });

  const resetField = () => {
    setFileUrl("");
    form.reset();
  };

  const { mutate, isPending } = useCreateCabin();

  const onSubmit = (data: TCabinFormData) => {
    mutate(
      {
        ...data,
        image: data.image[0],
      },
      {
        onSettled: () => resetField(),
      }
    );
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
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>عکس اقامتگاه</FormLabel>
              <FormControl>
                <FileUploader
                  fileUrl={fileUrl}
                  fieldChange={field.onChange}
                  setFileUrl={(value) => setFileUrl(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <SubmitButton isPending={isPending} />
      </form>
    </Form>
  );
};

export default CreateCabinForm;
