import { ShowPasswordIcon } from "@/components/shared";
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
import { Label } from "@/components/ui/label";
import useCurrentUser from "@/hooks/useCurrentUser";
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
    console.log(data);
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
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام</FormLabel>
                <FormControl>
                  <Input className="input-bg" {...field} />
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
        <div className="flex gap-2">
          <Button type="submit">بروزرسانی</Button>
          <Button type="reset" onClick={resetField}>
            لغو
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateUserFormData;
