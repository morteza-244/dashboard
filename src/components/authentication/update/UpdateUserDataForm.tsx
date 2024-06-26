import UserFormFooter from "@/components/authentication/UserFormFooter";
import { ShowPasswordIcon } from "@/components/shared";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUpdateUser from "@/hooks/useUpdateUser";
import {
  TUpdateUserFormData,
  updateUserSchema,
} from "@/validations/cabinsValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UpdateProfileImage from "./UpdateProfileImage";

const UpdateUserFormData = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { data: userData } = useCurrentUser();
  const { mutate, isPending } = useUpdateUser();
  const fullName = String(userData?.user.user_metadata.fullName);

  const form = useForm<TUpdateUserFormData>({
    defaultValues: {
      fullName: fullName,
      password: "",
    },
    resolver: zodResolver(updateUserSchema),
  });

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const resetField = () => {
    form.reset();
    setShowPassword(false);
    setFile(null);
  };

  const onSubmit = (data: TUpdateUserFormData) => {
    mutate(
      {
        avatar: file!,
        fullName: data.fullName,
        password: data?.password!,
      },
      { onSettled: () => resetField }
    );
  };

  useEffect(() => {
    form.reset({
      fullName: fullName,
    });
  }, [userData]);

  return (
    <Form {...form}>
      <h4 className="my-4 text-center text-2xl">بروزرسانی حساب کاربری</h4>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <UpdateProfileImage
          file={file}
          handleChangeAvatar={handleChangeAvatar}
          avatar={userData?.user.user_metadata.avatar}
          isPending={isPending}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              disabled
              id="email"
              defaultValue={userData?.user.email}
              className="input-bg"
            />
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  <div className="flex relative">
                    <Input
                      disabled={isPending}
                      type={showPassword ? "text" : "password"}
                      className="input-bg pl-9"
                      {...field}
                    />
                    <ShowPasswordIcon
                      handleShowPassword={handleShowPassword}
                      showPassword={showPassword}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <UserFormFooter isPending={isPending} resetField={resetField} />
      </form>
    </Form>
  );
};

export default UpdateUserFormData;
