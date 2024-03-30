import supabase from "./supabase";

export const getCabins = async () => {
  try {
    const response = await supabase.from("cabins").select("*");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
