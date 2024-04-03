import supabase from "./supabase";

export const getSettings = async () => {
  const { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    console.log(error.message);
    throw new Error("Settings could not be loaded");
  }
  return data;
};
