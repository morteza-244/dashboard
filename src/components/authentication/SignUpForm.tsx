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
import useSignUp from "@/hooks/useSignUp";
import { signUpSchema, TSignUpFormData } from "@/validations/cabinsValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SubmitLoading } from "../shared";

const SignUpForm = () => {
  const { mutate, isPending } = useSignUp();
  const form = useForm<TSignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = (data: TSignUpFormData) => {
    mutate(
      {
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      },
      {
        onSettled: () => {
          form.reset();
        },
      }
    );
  };

  return (
    <Form {...form}>
      <h4 className="my-4 text-center text-2xl">افزودن کاربر جدید</h4>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 gap-4 rounded-lg p-5 shadow-lg dark:bg-inherit dark:border bg-slate-50"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام</FormLabel>
              <FormControl>
                <Input disabled={isPending} className="input-bg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ایمیل</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  className="input-bg"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رمز عبور</FormLabel>
              <FormControl>
                <Input disabled={isPending} className="input-bg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تایید رمز عبور</FormLabel>
              <FormControl>
                <Input disabled={isPending} className="input-bg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit" disabled={isPending}>
            {isPending ? <SubmitLoading /> : "ایجاد کاربر"}
          </Button>
          <Button onClick={() => form.reset()} disabled={isPending}>
            لغو
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
