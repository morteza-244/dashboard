import { TNewSetting } from "@/types";
import supabase from "./supabase";

export const getSettings = async () => {
  const { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    console.log(error.message);
    throw new Error("Settings could not be loaded");
  }
  return data;
};

export const updateSettings = async (newSetting: TNewSetting) => {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();
  if (error) {
    console.log(error.message);
    throw new Error("Settings could not be updated");
  }
  return data;
};
