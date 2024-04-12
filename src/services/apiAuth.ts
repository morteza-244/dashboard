import { TUserLogin, TUserSignUp } from "@/types";
import supabase from "./supabase";

export const loginApi = async (obj: TUserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: obj.email,
    password: obj.password,
  });

  if (error) throw new Error("ایمیل یا رمز عبور ارائه شده شتباه است");
  return data;
};

export const signUp = async (obj: TUserSignUp) => {
  const { data, error } = await supabase.auth.signUp({
    email: obj.email,
    password: obj.password,
    options: {
      data: {
        fullName: obj.fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getSession();

  if (!data.session) return null;

  const { data: currentUser, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return currentUser;
};

export const logOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};
