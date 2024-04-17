import { TUpdateUser, TUserLogin, TUserSignUp } from "@/types";
import supabase, { supabaseUrl } from "./supabase";

export const loginApi = async (obj: TUserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: obj.email,
    password: obj.password,
  });

  if (error) throw new Error("ایمیل یا رمز عبور وارد شده اشتباه است");
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

export const updateCurrentUser = async (obj: TUpdateUser) => {
  //update user fullName or password
  const { data, error } = await supabase.auth.updateUser({
    password: obj.password,
    data: {
      fullName: obj.fullName,
    },
  });

  if (error) throw new Error(error.message);
  if (!obj.avatar) return data;

  //upload avatar
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, obj.avatar);

  if (storageError) throw new Error(storageError.message);

  //update user avatar
  const { data: updateUser, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updateError) throw new Error(updateError.message);
  return updateUser;
};
