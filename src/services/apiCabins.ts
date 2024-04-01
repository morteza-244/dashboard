import { TNewCabin } from "@/types";
import supabase from "./supabase";

export const getCabins = async () => {
  try {
    const response = await supabase.from("cabins").select("*");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCabin = async (newCabin: TNewCabin) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    throw new Error("Cabin could not be created");
  }
  return data;
};

export const deleteCabin = async (id: number) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return data;
};
