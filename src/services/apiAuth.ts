import { TUserLogin } from "@/types";
import supabase from "./supabase";

export const loginApi = async (obj: TUserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: obj.email,
    password: obj.password,
  });

  if (error) {
    throw new Error("ایمیل یا رمز عبور ارائه شده شتباه است");
  }
  return data;
};
